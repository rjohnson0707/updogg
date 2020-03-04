const express = require('express');
const router = express.Router();
const foodRevCtrl = require('../controllers/foodRev');

router.post('/foods/:id/reviews', foodRevCtrl.create);

module.exports = router;