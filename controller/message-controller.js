import Message from "../modal/message-modal.js";
import Conversation from "../modal/conversation.js";

export const newMessage = async (req, res)=>{
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});
        res.status(200).json("New message sent successfullt")
    }catch(err){
        res.status(400).json(err.message);
    }
};

export const getAllMessages = async (req, res)=>{
    try{
        const id = req.params.id;
        const messages = await Message.find({ conversationId: { $eq: id} });
        return res.status(200).json(messages);
    }catch(err){ 
        res.status(400).json(err.message);
    }
}

export const updateProfile = ()=>{
    
}