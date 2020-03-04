var express = require('express');
var router = express.Router();
const healthCtrl = require('../controllers/health');

router.get('/health', healthCtrl.index);
router.get('/health/new', healthCtrl.new);
router.get('/health/:id', healthCtrl.show)
router.get('/health/:id/edit', healthCtrl.edit);
router.post('/health', healthCtrl.create);
router.put('/health/:id', healthCtrl.update);
router.delete('/health/:id', healthCtrl.delete);



module.exports = router;