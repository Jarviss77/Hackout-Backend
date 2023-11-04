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
        PicturePath:{
            type: String,
            default: "",
        },
        PostedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        Sold:{
            type: Boolean,
            default: false,
        },
    });

const Product = model("Product", productSchema);

export default Product;