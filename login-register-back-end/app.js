const express=require('express')
const appServer=express();

appServer.use(express.json())

const cors=require('cors')
appServer.use(cors())

const database=require('./database/database')
const Routes=require('./View/Routes')

appServer.use('/',Routes)



appServer.listen(5000,()=>{
    console.log("server is running PORT On 5000")
})