const express = require('express'); 
const router = express.Router(); 
const {upload} = require('./multer')
const {createFilm, editFilm, deleteFilm , saveFilm, deleteFromToWatch} = require('./controller');
const { isAuth , isAdmin} = require('../auth/middleweares');

router.post('/api/films/new' , isAuth, upload.single('image') ,  createFilm);
router.post('/api/films/edit' ,isAuth,  upload.single('image') ,  editFilm);
router.delete('/api/films/:id', isAuth, deleteFilm);
router.post('/api/films/save'  , isAuth, saveFilm )
router.delete('/api/films/save/:id' ,isAuth,  deleteFromToWatch)
module.exports = router ; 