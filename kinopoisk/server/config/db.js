const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/kinopoisk').then(()=>{ 
    console.log("Connecteed to db");
}).catch((e)=> { 
    console.log('failed to coonnect db')
})