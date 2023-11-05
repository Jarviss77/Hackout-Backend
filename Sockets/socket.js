// import { Server } from "socket.io";
// import { createAdapter } from "@socket.io/redis-adapter";
// import { createClient } from "redis";
//
// const pubClient = createClient({ host: "localhost", port: 6379 });
// const subClient = pubClient.duplicate();
//
// const io = new Server({
//     adapter: createAdapter(pubClient, subClient)
// });
//
// io.listen(3000);