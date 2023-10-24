const genres = require("./genres");
const getAllGenres = async(req , res )=> { 
    const data = await genres.find(); 
    res.send({data});
}
module.exports={getAllGenres}