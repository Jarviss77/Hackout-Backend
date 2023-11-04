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
// import dasboardRoutes from './routes/dashboard.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

const server = http.createServer(app);

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan(':method :url :status :response-time ms'));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Routes

app.use("/product", productRoutes);

//Mongoose Setup

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

}).catch((err) => {
    console.log(err.message);
});

