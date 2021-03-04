const Stripe = require("stripe");
const config = require('../config/default.json')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || config["STRIPE_SECRET_KEY"])
const db = require("../models");
const tsheets_token = process.env.TSHEETS_BEARER_TOKEN || config["TSHEETS_BEARER_TOKEN"]
const request = require("request");
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
        // try {

        const tsheet_body = {
            "data":
                [
                    {
                        "schedule_calendar_id": "294591",
                        "start": "2021-03-06T19:00:00+00:00",
                        "end": "2021-03-06T20:00:00+00:00",
                        "title": "FROM MASTER",
                        "all_day": false
                    }
                ]
        }

        var options = {
            method: 'POST',
            url: 'https://rest.tsheets.com/api/v1/schedule_events',
            headers:
            {
                'Authorization': tsheets_token,
                'Content-Type': 'application/json',
            },
            body: tsheet_body,
            json: true
        };

        request(options, async function (error, response, body) {
            if (error) throw new Error(error);

            console.log(JSON.stringify(body));
            // console.log(response);

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
                        item: { invoice, body }
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
