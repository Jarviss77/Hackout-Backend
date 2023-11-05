import http from "http";
import { Server } from "socket.io";
import socketAuth from 'socketio-auth';
import adapter from 'socket.io-redis';
import redis from '../configs/redis.js';

const SOCKET_PORT = process.env.SOCKET_PORT || 9000;
const server = http.createServer();
const io = new Server(server);

const redisAdapter = adapter({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS || 'password',
});

io.attach(server);
io.adapter(redisAdapter);

// dummy user verification
async function verifyUser (token) {
    return new Promise((resolve, reject) => {
        // setTimeout to mock a cache or database call
        setTimeout(() => {
            // this information should come from your cache or database
            const users = [
                {
                    id: 1,
                    name: 'mariotacke',
                    token: 'secret token',
                },
            ];

            const user = users.find((user) => user.token === token);

            if (!user) {
                return reject('USER_NOT_FOUND');
            }

            return resolve(user);
        }, 200);
    });
}

socketAuth(io, {
    authenticate: async (socket, data, callback) => {
        const { token } = data;

        try {
            const user = await verifyUser(token);
            const canConnect = await redis
                .setAsync(`users:${user.id}`, socket.id, 'NX', 'EX', 30);

            if (!canConnect) {
                return callback({ message: 'ALREADY_LOGGED_IN' });
            }

            socket.user = user;

            return callback(null, true);
        } catch (e) {
            console.log(`Socket ${socket.id} unauthorized.`);
            return callback({ message: 'UNAUTHORIZED' });
        }
    },
    postAuthenticate: async (socket) => {
        console.log(`Socket ${socket.id} authenticated.`);

        socket.conn.on('packet', async (packet) => {
            if (socket.auth && packet.type === 'ping') {
                await redis.setAsync(`users:${socket.user.id}`, socket.id, 'XX', 'EX', 30);
            }
        });
    },
    disconnect: async (socket) => {
        console.log(`Socket ${socket.id} disconnected.`);

        if (socket.user) {
            await redis.delAsync(`users:${socket.user.id}`);
        }
    },
})

server.listen(SOCKET_PORT, () => console.log(`Server is running on port: ${SOCKET_PORT}`));