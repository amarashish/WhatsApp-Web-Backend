

import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId:{
        type: String
    },
    text: {
        type: String
    },
    file: {
        type : String
    },
    size: {
        type: Number
    }
},
{
    timestamps: true
});

const message = mongoose.model("Message", MessagesSchema);
export default message;