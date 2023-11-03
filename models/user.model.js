import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const userSchema = new Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
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
        location: String,
    },
    { timestamps: true }
    );

const User = model("User", userSchema);

export default User;

