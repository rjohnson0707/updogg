var express = require('express');
var router = express.Router();
const foodsCtrl = require('../controllers/foods');

router.get('/foods', foodsCtrl.index);
router.get('/foods/new', foodsCtrl.new);
router.get('/foods/:id', foodsCtrl.show)
router.post('/foods', foodsCtrl.create);



module.exports = router;