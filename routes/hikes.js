var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');

router.get('/hikes', hikesCtrl.index);
router.get('/hikes/new', hikesCtrl.new);
router.get('/hikes/:id', hikesCtrl.show)
router.post('/hikes', hikesCtrl.create);



module.exports = router;