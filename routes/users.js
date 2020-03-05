var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/home', isLoggedIn, usersCtrl.home);
router.get('/about', isLoggedIn, usersCtrl.about);
router.get('/profile', isLoggedIn, usersCtrl.profile);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;
