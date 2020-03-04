const User = require('../models/user');

module.exports = {
    index,
    home,
    about,
    profile,
};

function index(req, res) {
    res.render('users/index', {
        user: req.user,
        name: req.query.name
    });
};

function home(req, res) {
    res.render('users/home');
}

function about(req, res) {
    res.render('users/about');
};

function profile(req, res) {
    res.render('users/profile');
};

