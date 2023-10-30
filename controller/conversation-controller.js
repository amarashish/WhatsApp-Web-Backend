import Conversation from "../modal/conversation.js";


export const newConversation = async (req, res) => {
    try {
        const {senderId, receiverId } = req.body;
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });

        if (exist) {
            return res.status(200).json("conversation already exists");
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        res.status(200).json("conversation saved successfully");

    } catch (err) {
        res.status(400).json(err.message);
    }
};

export const getConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
        res.status(200).json(conversation);

    } catch (err) {
        res.status(400).json(err.message);
    }
};

export const getAllConversation = async(req, res)=>{
    try {
        const id = req.params.id;
        const conversation = await Conversation.find({ userId: { $eq: id} });
        res.status(200).json(conversation);

    } catch (err) {
        res.status(400).json(err.message);
    }
}
