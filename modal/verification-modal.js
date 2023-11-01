

import mongoose from "mongoose";

const verificationSchema = mongoose.Schema({
    sub: {
        type: String
    },
    authToken: {
        type: String
    }
})

const credential = new mongoose.model('credential', verificationSchema);

export default credential;