const User = require('../models/user');
const Park = require('../models/park');

module.exports = {
    index,
    home,
    about,
    profile
};

function index(req, res) {
    res.render('users/index', {
        user: req.user
    });
};

function home(req, res) {
    res.render('users/home', {
        user: req.user
    });
}

function about(req, res) {
    res.render('users/about', {
        user: req.user
    });
};

function profile(req, res) {
    res.render('users/profile', {
    user: req.user
    });
};

