const express=require('express');
const router=express.Router();
const handleAllUsers=require('../controllers/user')

//login api
router.post('/PostUserData',handleAllUsers.loginUser);


module.exports=router;