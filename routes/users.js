var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/home', usersCtrl.home);
router.get('/about', usersCtrl.about);
router.get('/profile', usersCtrl.profile);


module.exports = router;
