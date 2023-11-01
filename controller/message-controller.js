import Message from "../modal/message-modal.js";
import Conversation from "../modal/conversation.js";
import { uploadFileGCS } from "../GCSupload/helper.js";

export const newMessage = async (req, res)=>{
        try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});
        res.status(200).json("New message sent successfullt")
    }catch(err){
        res.status(400).json("Error newMessage API (beackend)", err.message);
    }
};

export const getAllMessages = async (req, res)=>{
    try{
        const id = req.params.id;
        const messages = await Message.find({ conversationId: { $eq: id} });
        res.status(200).json(messages);
        
    }catch(err){ 
        res.status(400).json("Error getAllMessages API (beackend)", err.message);
    }
}


export const uploadFile = async (req, res)=>{
    try{
        const url = await uploadFileGCS(req.file);
        res.status(200).json(url);
    }catch(err){
        res.status(400).json("Error uploadFile API (beackend)", err.message);
    }
}
