var express = require('express');
var router = express.Router();
const foodsCtrl = require('../controllers/foods');

router.get('/foods', foodsCtrl.index);
router.get('/foods/new', foodsCtrl.new);
router.get('/foods/:id', foodsCtrl.show)
router.get('/foods/:id/edit', foodsCtrl.edit);
router.post('/foods', foodsCtrl.create);
router.put('/foods/:id', foodsCtrl.update);
router.delete('/foods/:id', foodsCtrl.delete);



module.exports = router;