
import File from "../modal/file-modal.js"
import User from "../modal/user.js"


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
        const path = req.file.path;

        try{
            console.log(req.params.id);
            const user = await User.findOne({sub: req.params.id});
            if(user){
                user.picture = path;
                await user.save();
                return {path: path};
            }
        }catch(err){
            res.status(400).json({"message": err.message});
        }
    }
}

