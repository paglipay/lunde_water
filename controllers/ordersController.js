const Stripe = require("stripe");
const config = require('../config/default.json')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || config["STRIPE_SECRET_KEY"])
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Order
            .find(req.query)
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
    create: async (req, res) => {
        console.log('create:', req.body)
        try {
            const stripeTest = await stripe.invoiceItems.create({
                price: 'price_1IINwILvJwjuOr0RbAHrmUyh',
                customer: 'cus_IuYYhZhxyoNkai'

            });
            console.log(stripeTest);



            const invoice = await stripe.invoices.create({
                customer: 'cus_IuYYhZhxyoNkai',
                collection_method: 'send_invoice',
                days_until_due: 30,
            });
            db.Order
                .create({
                    customerId: 'cus_IuYYhZhxyoNkai',
                    item: invoice

                })
                .then(dbModel => {
                    // console.log({ results: dbModel })
                    res.json({ results: dbModel })
                })
                .catch(err => {
                    // console.log(err)
                    res.status(422).json(err)
                });
        }
        catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }

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
