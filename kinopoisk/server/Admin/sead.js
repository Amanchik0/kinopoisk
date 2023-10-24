const User = require('../auth/user');
const bcrypt = require('bcrypt')
async function createAdmin(){ 
    const findAdmin =await User.find({isAdmin : true}).count();
    if (findAdmin == 0 ){ 
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash('1234', salt, function(err, hash) {
                new User({
                    full_name:'Master', 
                    email: 'masters@gmail.com', 
                    isAdmin:true, 
                    password:hash
                }).save();
            })
        })
    }
}
module.exports = createAdmin; 