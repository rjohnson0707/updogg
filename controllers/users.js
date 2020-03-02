const User = require('../models/user');

module.exports = {
    index,
    home,
    foods,
    hikes,
    parks,
    health
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

function foods(req, res) {
    res.render('users/foods');
};

function hikes(req, res) {
    res.render('users/hikes');
};

function parks(req, res) {
    res.render('users/parks');
};

function health(req, res) {
    res.render('users/health');
}