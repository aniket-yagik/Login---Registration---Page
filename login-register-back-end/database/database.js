const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/register-app')
  .then(() => console.log('Connected!')).catch(()=>{
    console.log('database disConnected!')
  })
