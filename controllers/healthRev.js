var Health = require('../models/health');

module.exports = {
    create
};

function create(req, res) {
    Health.findById(req.params.id, function(err, health) {
        health.reviews.push(req.body);
        health.save(function(err) {
            res.redirect(`/health/${health._id}`);
        });
    });
}