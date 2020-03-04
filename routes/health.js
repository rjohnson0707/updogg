var express = require('express');
var router = express.Router();
const healthCtrl = require('../controllers/health');

router.get('/health', healthCtrl.index);
router.get('/health/new', healthCtrl.new);
router.get('/health/:id', healthCtrl.show)
router.post('/health', healthCtrl.create);



module.exports = router;