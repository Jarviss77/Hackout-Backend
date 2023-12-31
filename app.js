import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import productRoutes from './routes/product.route.js';
import serviceRoutes from './routes/service.route.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan(':method :url :status :response-time ms'));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Routes

app.use("/product", productRoutes);
app.use("/service", serviceRoutes);

//Mongoose Setup

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    app.listen(PORT, () => console.log(`Database Server is running on port: ${PORT}`));

}).catch((err) => {
    console.log(err.message);
});

// const server = app.listen(4000, () => console.log(`Web socket server is running on port: 4000`))
//
// const io = new Server(server);
//
// io.on("connection", (socket) => {
//     console.log("connected");
// });

