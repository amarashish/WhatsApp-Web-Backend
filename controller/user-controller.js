import User from "../modal/user.js"

export const addUser = async(req, res)=>{
    try{
        const userExist = await User.findOne({sub: req.body.sub});

        if(userExist){
            return res.status(200).json(userExist);
        }else{
            const newUser = new User(req.body);
            await newUser.save();
            res.status(200).json(newUser);
        }
    }catch(err){
        return res.status(500).json(err.message);
    }
}

export const getUsers = async (req, res)=>{
    try{
        const users = await User.find({});
        return res.status(200).json(users);
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
    }catch(err){
        res.status(400).json({"message": err.message});
    }
};
