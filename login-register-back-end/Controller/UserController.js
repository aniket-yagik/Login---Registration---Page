const userSchema=require('../Model/userSchema')
const bcrypt = require('bcrypt');

/* userRegister api */
const userRegister=async(req,res)=>{
    
try{
     /* Destructuring Object */
    const {name,email,password,cpassword}=req.body

    /* Invalid request validation */
 if(!req.body || !name || !email || !password || !cpassword){
    return res.send({status:400, success:false, message:'invalid request'})
 }

 /* Email validation */
 let findAllReadyRegistered=await userSchema.find({email:email})

if(!findAllReadyRegistered.length == 0){
    return res.send({status:400,success:false,message:'Email all ready registerted'})
}

     /* Hash password */
     const passwordHashed =await bcrypt.hash(password,10);


      /* Create Instance */
    const userInstance = new userSchema({
        name:name,
        email:email,
        password:passwordHashed,
        cpassword:passwordHashed
    })

    /* Instance saved in Database */
    const savedData= await userInstance.save()
    res.send({status:200,success:true,message:'register successfully' })

}catch(err){
    return res.send({status:404,success:false,message:err.message})
}
}

/* userLogin api */
const userLogin=async(req,res)=>{

    try{
         /* Destructuring Object */
        const {email,password}=req.body
        
     /* findUser in Database  */  
    const findUser= await userSchema.findOne({email:email});

     /* passwordUnHashed */
    if(passwordUnHashed = await bcrypt.compare(password,findUser.password)){
        res.send({
                  status:200,
                  success:true,
                  message:'login sucessfully',
                  name:findUser.name,
                  email:findUser.email
    })
    }else if(password == 0 ){
        return res.send({status:400,success:false,message:'please enter your password'})
    }else{
        return res.send({status:400,success:false,message:'incorrect password please check your password'})
    }

    }catch(err){
        return res.send({status:404,success:false,message:err.message})
    }

}


module.exports={
    userRegister,
    userLogin
}