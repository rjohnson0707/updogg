const User = require('../models/user');

module.exports = {
    index,
    home,
    about,
    profile,
};

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

function index(req, res) {
    res.render('users/index', {
        user: req.user
    });
if (isLoggedIn) {
    res.render('users/home')
}
};

function home(req, res) {
    res.render('users/home', {
        user: req.user
    });
}

function about(req, res) {
    res.render('users/about');
};

function profile(req, res) {
    res.render('users/profile');
};

