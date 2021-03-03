const Stripe = require("stripe");
const config = require('../config/default.json')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || config["STRIPE_SECRET_KEY"])

module.exports = {
    create: function (req, res) {
        console.log('create:', req.body)
        stripe.customers
            .create(req.body)
            .then(({ _id }) => stripe.customerId.findOneAndUpdate({ email: req.body.order },
                { $push: { Orders: _id } }, { new: true }))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },

    findAll: async (req, res) => {
        console.log("listOrder");
        const invoices = await stripe.invoices.list({
            limit: 10,
        });
        console.log(invoices);
        res.status(200).json(invoices)
    },

    createInvoiceItem: function (req, res) {
        console.log(req.params)
        stripe.invoiceItems.create(req.params)
            .then(dbModel => res.json({ results: dbModel }))
            .catch(err => res.status(422).json(err));
    }

};



