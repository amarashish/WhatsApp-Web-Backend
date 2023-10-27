import express from "express";
import {addUser, getUsers, updateUser} from "../controller/user-controller.js";
import { newConversation, getConversation, getAllConversation } from "../controller/conversation-controller.js";
import { newMessage, getAllMessages} from "../controller/message-controller.js";
import { uploadFile, updateProfile } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.put('/update', updateUser);

route.post('/message/add', newMessage);
route.get('/messages/getAll/:id', getAllMessages);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);
route.get('/conversations/getAll/:id', getAllConversation);

route.post('/file/upload', upload.single("file"), uploadFile);
route.post('/upload/:id', upload.single("file"), updateProfile);

export default route;