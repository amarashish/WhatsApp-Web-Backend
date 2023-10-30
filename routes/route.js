import express from "express";
import {addUser, getUsers, updateUser, updateProfile} from "../controller/user-controller.js";
import { newConversation, getConversation, getAllConversation } from "../controller/conversation-controller.js";
import { newMessage, getAllMessages, uploadFile} from "../controller/message-controller.js";
import { uploadFileGCS } from "../GCSupload/helper.js";
import upload from "../middlewares/upload.js";

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
route.post('/updateProfile/:id', upload.single("file"), updateProfile);

// route.post('/upload/:id', upload.single("file"), updateProfile);
// route.get('/profile/:Id', getProfilePic);

export default route;