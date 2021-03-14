const config = process.env.NODE_ENV === 'production' || require('../config/default.json')
const db = require("../models");
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || config["STRIPE_SECRET_KEY"])

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
        console.log('profile create:', req.body)
        const customer = await stripe.customers.create({
            name: req.body["Profile"]['Full Name'] ? req.body["Profile"]['Full Name']['answer'] : '',
            email: req.body["Profile"]['Email'] ? req.body["Profile"]['Email']['answer'] : '',
            address: {
                country: "US",
                line1: req.body["Profile"]['Street Address'] ? req.body["Profile"]['Street Address']['answer'] : '',
                line2: req.body["Profile"]['Street Address2'] ? req.body["Profile"]['Street Address2']['answer'] : '',
                city: req.body["Profile"]['City'] ? req.body["Profile"]['City']['answer'] : '',
                state: req.body["Profile"]['State'] ? req.body["Profile"]['State']['answer'] : '',
                postal_code: req.body["Profile"]['Zip Code'] ? req.body["Profile"]['Zip Code']['answer'] : ''
            },
            description: 'My First Test Customer',
            phone: req.body["Profile"]['Phone Number'] ? req.body["Profile"]['Phone Number']['answer'] : ''
        });

        db.Profile
            .create({
                item: { stripe: customer },
                app_data: req.body,
            })
            .then(dbModel => {
                res.json(dbModel)
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
