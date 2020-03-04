const Health = require('../models/health');

module.exports = {
    index,
    show,
    new: newHealth,
    create,
    edit,
    update,
    delete: deleteHealth
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

function edit(req, res) {
    Health.findById(req.params.id, function(err, health) {
        res.render('health/edit', {
        health
        })
    })
 };
 
 function update(req, res) {
     Health.findByIdAndUpdate(req.params.id, req.body, function(err, health) {
         res.redirect(`/health/${health._id}`);
     });
 };

 function deleteHealth(req, res) {
    Health.findByIdAndDelete(req.params.id, function(err, health) {
        res.redirect('/health');
    });
};