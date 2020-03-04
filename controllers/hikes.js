const Hike = require('../models/hike');

module.exports = {
    index,
    show,
    new: newHike,
    create
};

function show(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        res.render('hikes/show', {
            hike
        })
    });
};

function index(req, res) {
    Hike.find({}, function(err, hikes) {
        res.render('hikes', { hikes });
    });
}


function newHike(req, res) {
    Hike.find({}, function(err, hikes) {
    res.render('hikes/new', {
        hikes
    });
  })
}

function create(req, res) {
    Hike.create(req.body, function(err, hike) {
    if (err) return res.redirect('/hikes');
    res.redirect('/hikes');
    });
}