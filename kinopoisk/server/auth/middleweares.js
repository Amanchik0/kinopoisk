const isAuth =( req, res , next)=>{ 
    console.log(req.user);
    if(req.user){
        next();
    }else { 
        res.status(401).send('Unauthrized');
    }
}
const isAdmin =(req, res, next )=>{ 
    if (req.user && req.user.isAdmin){ 
        next();
    }else { 
        res.status(403).send('Access forbiden');
    }
}
module.exports = {
    isAuth,
    isAdmin
}; 