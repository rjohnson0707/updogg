const express = require('express');
const router = express.Router();
const parkRevCtrl = require('../controllers/parkRev');

router.post('/parks/:id/reviews', parkRevCtrl.create);

module.exports = router;