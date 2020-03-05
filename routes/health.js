var express = require('express');
var router = express.Router();
const healthCtrl = require('../controllers/health');

router.get('/health', isLoggedIn, healthCtrl.index);
router.get('/health/new', healthCtrl.new);
router.get('/health/:id', healthCtrl.show)
router.get('/health/:id/edit', healthCtrl.edit);
router.post('/health', healthCtrl.create);
router.put('/health/:id', healthCtrl.update);
router.delete('/health/:id', healthCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;