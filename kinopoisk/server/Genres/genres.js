const mongoose = require('mongoose');

const genreSchema =new mongoose.Schema({ 
    name :String , 
    key: Number , 
});

module.exports = mongoose.model('genre' , genreSchema );