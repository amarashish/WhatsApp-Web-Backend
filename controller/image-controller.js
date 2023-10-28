
import path from "path";
import File from "../modal/file-modal.js"
import User from "../modal/user.js"

const __dirname = path.resolve();

export const uploadFile = async (req, res) => {

    if (req.file) {
        const path = req.file.path;
        
        const newFile = new File({
            path: path
        });

        await newFile.save();
        return {path: path};
    };
}
export const updateProfile = async (req, res) => {

    if(req.file){
        console.log(req.file)
        const path = req.file.path;
        
        try{
            const user = await User.findOne({sub: req.params.id});
            if(user){
                user.picture = path;
                await user.save();
                return res.status(200).json({ path: `http://localhost:8000/profile/${req.params.id}`});
            }
        }catch(err){
            res.status(400).json({"message": err.message});
        }
    }
}


