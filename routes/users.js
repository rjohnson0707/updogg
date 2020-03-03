var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/home', usersCtrl.home);
router.get('/parks', usersCtrl.parks);
router.get('/hikes', usersCtrl.hikes);
router.get('/foods', usersCtrl.foods);
router.get('/health', usersCtrl.health);
router.get('/about', usersCtrl.about);
router.get('/profile', usersCtrl.profile);
router.get('/new', usersCtrl.new);



module.exports = router;
