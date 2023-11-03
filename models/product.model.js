import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const productSchema = new Schema(
    {
        Name:{
            type: String,
            required: true,
            min: 2,
            max: 200,
        },
        description:{
            type: String,
            required: true,
            min: 2,
            max: 500,
        },
        price:{
            type: Number,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        PostedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    });

const Product = model("Product", productSchema);

export default Product;