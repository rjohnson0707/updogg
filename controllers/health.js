const Health = require('../models/health');

module.exports = {
    index,
    show,
    new: newHealth,
    create
};

function show(req, res) {
    Health.findById(req.params.id, function(err, health) {
        res.render('health/show', {
            health
        })
    });
};

function index(req, res) {
    Health.find({}, function(err, health) {
        res.render('health', { health });
    });
}


function newHealth(req, res) {
    Health.find({}, function(err, health) {
    res.render('health/new', {
        health
    });
  })
}

function create(req, res) {
    Health.create(req.body, function(err, health) {
    if (err) return res.redirect('/health');
    res.redirect('/health');
    });
}