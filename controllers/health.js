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
            health,
            user: req.user
        })
    });
};

function index(req, res) {
    Health.find({}, function(err, health) {
        res.render('health', { 
            health,
        user: req.user
     });
    });
}


function newHealth(req, res) {
    Health.find({}, function(err, health) {
    res.render('health/new', {
        health,
        user: req.user
    });
  })
}

function create(req, res) {
    req.body.createdBy = req.user._id;
    Health.create(req.body, function(err, health) {
    if (err) return res.redirect('/health');
    res.redirect('/health');
    });
}

function edit(req, res) {
    Health.findById(req.params.id, function(err, health) {
        res.render('health/edit', {
        health,
        user: req.user
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