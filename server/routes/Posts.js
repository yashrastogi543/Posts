const express=require('express')

const router=express.Router();
const { Posts }=require('../models');

router.get("/",async (req,res)=>{
    const varc= await Posts.findAll();
    res.json(varc);
})
router.get("/byid/:id",async (req,res)=>{
    const id1=req.params.id;
    const element = await Posts.findOne({ where: { id: id1 } });
    res.json(element);
})

router.post("/",async (req,res)=>{
    const post=req.body;
    await Posts.create(post);
    res.json(post);
})
module.exports=router;
