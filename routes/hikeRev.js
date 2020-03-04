const express = require('express');
const router = express.Router();
const hikeRevCtrl = require('../controllers/hikeRev');

router.post('/hikes/:id/reviews', hikeRevCtrl.create);

module.exports = router;