const express = require('express');
const router = express.Router();
const healthRevCtrl = require('../controllers/healthRev');

router.post('/health/:id/reviews', healthRevCtrl.create);

module.exports = router;