const router=require('express').Router()

const {userRegister,userLogin}=require('../Controller/UserController')


router.post('/register',userRegister)
router.post('/login',userLogin)



module.exports=router;