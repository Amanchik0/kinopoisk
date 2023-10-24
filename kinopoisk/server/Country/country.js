const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({ 
    name: String, 
    key: Number , 
})
module.exports = mongoose.model('country' , countrySchema);