const express=require('express')

const router=express.Router();
const { Users }=require('../models');
const bcrypt=require('bcrypt');
router.post("/",async (req,res)=>{
    const {username,password}=req.body;
        bcrypt.hash(password,10).then((hash)=>{
            Users.create(
                {
                    username: username,
                    password: hash,
                });
    res.json("Success");
    });  
});
// router.post("/",async (req,res)=>{
//     const post=req.body;
//     await Posts.create(post);
//     res.json(post);
// })
module.exports=router;
