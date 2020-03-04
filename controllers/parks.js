const Park = require('../models/park');


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
            park
        })
    });
};


function index(req, res) {
    Park.find({}, function(err, parks) {
        res.render('parks', { parks });
    });
}


function newPark(req, res) {
    Park.find({}, function(err, parks) {
    res.render('parks/new', {
        parks
    });
  })
}

function create(req, res) {
    req.body.leash = !!req.body.leash;
    Park.create(req.body, function(err, park) {
    if (err) return res.redirect('/parks');
    res.redirect('/parks');
    });
}

function edit(req, res) {
   Park.findById(req.params.id, function(err, park) {
       res.render('parks/edit', {
       park
       })
   })
};

function update(req, res) {
    req.body.leash = !!req.body.leash;
    Park.findByIdAndUpdate(req.params.id, req.body, function(err, park) {
        console.log(park);
        res.redirect(`/parks/${park._id}`);
    });
};

function deletePark(req, res) {
    Park.findByIdAndDelete(req.params.id, function(err, park) {
        res.redirect('/parks');
    });
};