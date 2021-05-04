const express=require('express');
const router=express.Router();
const controller = require('./board.controller');


router.get('/list', controller.list);
router.get('/view', controller.view);
router.get('/write', controller.write);
router.get('/modify', controller.modify);


//routers-index에서 가져올 수 있게

module.exports = router; 

