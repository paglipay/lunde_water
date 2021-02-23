const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Order
            .find(req.query)
            // .find({ ...req.query, user_id: req.userId }) fillter by users
            .sort({ date: -1 })
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Order
            .findById(req.params.id)
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log('create:', req.body)
        db.Order
            .create(req.body)
            .then(({ _id }) => db.customerId.findOneAndUpdate({ email: req.body.order },
                { $push: { Orders: _id } }, { new: true }))
            .then(dbModel => {
                console.log({ results: dbModel })
                res.json({ results: dbModel })
            })
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },


    update: function (req, res) {
        db.Order
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Order
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    }
};
