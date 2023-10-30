import User from "../modal/user.js"
import { uploadFileGCS } from "../GCSupload/helper.js";

export const addUser = async(req, res)=>{
    try{
        const userExist = await User.findOne({sub: req.body.sub});

        if(userExist){
            return res.status(200).json(userExist);
            
        }else{
            const newUser = new User(req.body);
            newUser.save();
            res.status(200).json(newUser); 
        }
    }catch(err){
        res.status(500).json(err.message);
    }
}

export const getUsers = async (req, res)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({"message": err.message});
    }
};

export const updateUser = async (req, res)=>{
    try{
        const user = await User.findOne({sub: req.body.sub});

        if(user){
            user.about = req.body.about;
            user.name = req.body.name;
            await user.save();
        }
        res.status(200).json("successfully updated user");

    }catch(err){
        res.status(400).json({"message": err.message});
    }
};

export const updateProfile = async(req, res)=>{
    try {   
        const url = await uploadFileGCS(req.file);
        const user = await User.findOne({sub: req.params.id});
        if(user){
            user.picture = url;
            user.save();
        }
        return res.status(200).json(url);

        // user && user.picture.includes("uploads") && res.download(user.picture, user.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
}
