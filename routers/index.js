const express=require('express');
const router=express.Router();
const mainRouter=require('./main/index');
const boardRouter=require('./board/index');



// router.use('/',(req,res)=>{})  // = > 예전에 했던 방법 

router.use('/',mainRouter);
router.use('/board', boardRouter)

module.exports=router; // router 보낼꺼야 저 멀리