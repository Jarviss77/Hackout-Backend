import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const userSchema = new Schema(
    {
        FirstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
        },
        LastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
        },
        Email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        },
        PhoneNumber: {
            type:Number,
            required: true,
        },
        SellingProducts: {
            type: Array,
            default: [],
            ref: 'Product',
        },
        location: String,
    },
    { timestamps: true }
    );

const User = model("User", userSchema);

export default User;

