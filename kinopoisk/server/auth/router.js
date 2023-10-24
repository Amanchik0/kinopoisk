const express = require('express'); 
const router = express.Router();
const {signup, signin , signout} = require('./controller')
const passport = require('passport')
const createAdmin = require('../Admin/sead')
router.post('/api/signup',signup)
router.post('/api/signin',passport.authenticate('local' , {failureRedirect: '/login?error=1'}), signin)
router.get('/api/signout', signout);
router.get('/api/auth/google',passport.authenticate("google") , (req,res)=> { 
    res.redirect('/profile/'+req.user._id )
})
createAdmin();
module.exports=router;