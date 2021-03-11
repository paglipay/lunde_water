const config = require('../config/default.json')
const db = require("../models");
// const restructureQuestionsForPost = (data) => {
//     let state = {}
//     Object.keys(data).forEach(d => {
//         console.log(data[d])
//         Object.keys(data[d]).forEach((q) => {
//             console.log(q)
//             state = {
//                 ...state,
//                 [data[d][q].id ? data[d][q].id : q]: data[d][q].answer,
//             };
//         })
//     })
//     return state
// }
module.exports = {
    findAll: function (req, res) {
        db.Profile
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Profile
            .findById(req.params.id)
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        console.log('create:', req.body)
        // console.log('restructureQuestionsForPost(req.body):', restructureQuestionsForPost(req.body))
        db.Profile
            .create({
                customerId: 'cus_IuYYhZhxyoNkai',
                // item: { invoice, body },
                app_data: req.body,
                // post_data: {'fake':'restructureQuestionsForPost(req.body)'}
            })
            .then(dbModel => {
                // console.log({ results: dbModel })
                res.json({ results: dbModel })
            })
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },

    update: function (req, res) {
        db.Profile
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Profile
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    }
};
