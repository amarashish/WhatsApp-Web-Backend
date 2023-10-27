
import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path: String
});

const File = mongoose.model('File', fileSchema);
export default File;