const Hike = require('../models/hike');

module.exports = {
    index,
    show,
    new: newHike,
    create,
    edit,
    update,
    delete: deleteHike
};

function show(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        res.render('hikes/show', {
            hike,
            user: req.user
        })
    });
};

function index(req, res) {
    Hike.find({}, function(err, hikes) {
        res.render('hikes', { 
            hikes,
        user: req.user
     });
    });
}


function newHike(req, res) {
    Hike.find({}, function(err, hikes) {
    res.render('hikes/new', {
        hikes,
        user: req.user
    });
  })
}

function create(req, res) {
    req.body.leash = !!req.body.leash;
    req.body.createdBy = req.user._id;
    Hike.create(req.body, function(err, hike) {
    if (err) return res.redirect('/hikes');
    res.redirect('/hikes');
    });
}

function edit(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        res.render('hikes/edit', {
        hike,
        user: req.user
        })
    })
 };
 
 function update(req, res) {
     req.body.leash = !!req.body.leash;
     Hike.findByIdAndUpdate(req.params.id, req.body, function(err, hike) {
         res.redirect(`/hikes/${hike._id}`);
     });
 };

 function deleteHike(req, res) {
    Hike.findByIdAndDelete(req.params.id, function(err, hike) {
        res.redirect('/hikes');
    });
};