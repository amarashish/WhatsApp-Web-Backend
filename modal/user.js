import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    sub: {
        type: String, 
    },
    name: {
        type: String,
    },
    picture: {
        type: String,
    },
    email: {
        type: String,
    },
    about: {
        type: String,
    },
    phone:{
        type: String
    },
});

const user = mongoose.model('user', userSchema);

export default user;