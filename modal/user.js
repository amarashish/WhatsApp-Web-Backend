import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    sub: {
        type: String, 
        require: true
    },
    name: {
        type: String,
        require: true
    },
    given_name: {
        type: String
    },
    family_name:{
        type: String
    },
    picture: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    email_verified: {
        type: Boolean
    },
    locale: {
        type: String
    },
    about: {
        type: String,
    }
});

const user = mongoose.model('user', userSchema);

export default user;