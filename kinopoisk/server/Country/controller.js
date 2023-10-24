const country = require ('./country'); 

const getAllCountries = async(req, res)=>{ 
    const data= await country.find();
    res.status(200).send({data});
}
module.exports = {getAllCountries}