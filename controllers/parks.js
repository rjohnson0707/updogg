const Park = require('../models/park');


module.exports = {
    index,
    show,
    new: newPark,
    create,
    edit,
    update
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
       res.render('parks/edit')
   })
};

function update(park, id) {
    req.body.leash = !!req.body.leash;
    Park.update(req.params.id, function(err, park) {
        res.render('parks/show');
    })
}