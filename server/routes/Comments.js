const express=require('express')

const router=express.Router();
const { Comments }=require('../models');

router.get("/:id",async (req,res)=>{
    const id1=req.params.id;
    const element = await Comments.findAll({ where: { PostId: id1 } });
    res.json(element);
})
router.post("/",async (req,res)=>{
    const comment=req.body;
    await Comments.create(comment);
    res.json(comment);
})
// router.post("/postComment/:id",async (req,res)=>{
//     const id1=req.params.id;
//     const cmnt=req.body;
//     await Comments.create(post);
//     res.json(post);
// })
module.exports=router;
