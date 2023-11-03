import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const messageSchema = new Schema(
    {
        Sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        Receiver:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        message:{
            type: String,
            required: true,
            min: 2,
            max: 500,
        },
    });

const Message = model("Message", messageSchema);

export default Message;