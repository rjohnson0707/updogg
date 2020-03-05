const Park = require('../models/park');
const User = require('../models/user');


module.exports = {
    index,
    show,
    new: newPark,
    create,
    edit,
    update,
    delete: deletePark
}

function show(req, res) {
    Park.findById(req.params.id, function(err, park) {
        res.render('parks/show', {
            park,
            user: req.user
        })
    });
};


function index(req, res) {
    Park.find({}, function(err, parks) {
        res.render('parks', 
        { parks,
         user: req.user });
        });
}


function newPark(req, res) {
    Park.find({}, function(err, parks) {
    res.render('parks/new', {
        parks,
        user: req.user
    });
  })
}

function create(req, res) {
    req.body.leash = !!req.body.leash;
    req.body.createdBy = req.user._id;
    Park.create(req.body, function(err, park) {
    if (err) return res.redirect('/parks');
    res.redirect('/parks');
    });
}

function edit(req, res) {
    Park.findById(req.params.id, function(err, park) {
       res.render('parks/edit', {
       park,
       user: req.user
      }) 
    });
};

function update(req, res) {
    req.body.leash = !!req.body.leash;
    Park.findByIdAndUpdate(req.params.id, req.body, function(err, park) {
        res.redirect(`/parks/${park._id}`);
    });
};

function deletePark(req, res) {
    Park.findByIdAndDelete(req.params.id, function(err, park) {
        res.redirect('/parks');
    });
};