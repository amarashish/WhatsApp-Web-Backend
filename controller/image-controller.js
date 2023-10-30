
// import User from "../modal/user.js"

    // export const updateProfile = async (req, res) => {
    
    //     if(req.file){
    //         console.log(req.file)
    //         const path = req.file.path;
            
    //         try{
    //             const user = await User.findOne({sub: req.params.id});
    //             if(user){
    //                 user.picture = path;
    //                 await user.save();
    //                 return res.status(200).json({ path: `http://localhost:8000/profile/${req.params.id}`});
    //             }
    //         }catch(err){
    //             res.status(400).json({"message": err.message});
    //         }
    //     }
    // }