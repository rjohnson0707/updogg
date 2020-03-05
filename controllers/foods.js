const Food = require('../models/food');

module.exports = {
    index,
    show,
    new: newFood,
    create,
    edit,
    update,
    delete: deleteFood
};

function show(req, res) {
    Food.findById(req.params.id, function(err, food) {
        res.render('foods/show', {
            food,
            user: req.user
        })
    });
};

function index(req, res) {
    Food.find({}, function(err, foods) {
        res.render('foods', { 
            foods,
        user: req.user 
    });
    });
}


function newFood(req, res) {
    Food.find({}, function(err, foods) {
    res.render('foods/new', {
        foods,
        user: req.user
    });
  })
}

function create(req, res) {
    req.body.createdBy = req.user._id;
    Food.create(req.body, function(err, food) {
    if (err) return res.redirect('/foods');
    res.redirect('/foods');
    });
}


function edit(req, res) {
    Food.findById(req.params.id, function(err, food) {
        res.render('foods/edit', {
        food,
        user: req.user
        })
    })
 };
 
 function update(req, res) {
     Food.findByIdAndUpdate(req.params.id, req.body, function(err, food) {
         res.redirect(`/foods/${food._id}`);
     });
 };

 function deleteFood(req, res) {
    Food.findByIdAndDelete(req.params.id, function(err, food) {
        res.redirect('/foods');
    });
};

