const Food = require('../models/food');

module.exports = {
    index,
    show,
    new: newFood,
    create
};

function show(req, res) {
    Food.findById(req.params.id, function(err, food) {
        res.render('foods/show', {
            food
        })
    });
};

function index(req, res) {
    Food.find({}, function(err, foods) {
        res.render('foods', { foods });
    });
}


function newFood(req, res) {
    Food.find({}, function(err, foods) {
    res.render('foods/new', {
        foods
    });
  })
}

function create(req, res) {
    Food.create(req.body, function(err, food) {
    if (err) return res.redirect('/foods');
    res.redirect('/foods');
    });
}



