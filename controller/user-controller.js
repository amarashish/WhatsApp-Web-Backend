import User from "../modal/user.js"
import { uploadFileGCS } from "../GCSupload/helper.js";
import Credential from "../modal/verification-modal.js";

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
        res.status(500).json("Error addUser API (beackend)", err.message);
    }
}

export const addVerifier = async (req, res) => {
    try{
        const credential = await Credential.findOne({sub: req.body.sub});
        if(credential){
            credential.sub = req.body.sub;
            credential.authToken = req.body.authToken;
            credential.save();
            return res.status(200).json("Credentials Updated");
        }
        else{
            const newCredential = new Credential(req.body);
            newCredential.save();
            res.status(200).json("Credentials saved")
        }

    }catch(err){
        console.log("Error addVerifier API (beackend)", err.message);
    }
}

export const getVerifier = async (req, res) => {
    try{
        const credential = await Credential.findOne({authToken: req.body.authToken});
        if(credential){
            const user = await User.findOne({sub: credential.sub});
            res.status(200).json(user);
        }
    }catch(err){
        console.log("Error getVerifier API (beackend)", err.message);
    }
    
}

export const getUsers = async (req, res)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(400).json("Error getUser API (beackend)", err.message);
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
        res.status(400).json("Error updateUser API (beackend)", err.message);
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
    } catch (err) {
        res.status(500).json("Error updateProfile  API (beackend)", err.message);
    }
}
