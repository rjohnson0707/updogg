var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');

router.get('/hikes', isLoggedIn, hikesCtrl.index);
router.get('/hikes/new', hikesCtrl.new);
router.get('/hikes/:id', hikesCtrl.show)
router.get('/hikes/:id/edit', hikesCtrl.edit);
router.post('/hikes', hikesCtrl.create);
router.put('/hikes/:id', hikesCtrl.update);
router.delete('/hikes/:id', hikesCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;