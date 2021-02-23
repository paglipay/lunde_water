// const Stripe = require("stripe");
// const stripe = new Stripe("sk_test_51H2jtGLvJwjuOr0RycKGhkT2ZzcZq9pkZfwNmUsSYhQhAr7c0Ay6MzmtW6kqU6lGJFItuNf6i24RQyqXoxpxYhyx00cOJYQMp2")

module.exports = {
    create: function (req, res) {
        console.log('create:', req.body)
        // stripe.customers
        //     .create(req.body)
        // .then(({ _id }) => stripe.customerId.findOneAndUpdate({ email: req.body.order },
        //     { $push: { Orders: _id } }, { new: true }))
        // .catch(err => {
        //     console.log(err)
        //     res.status(422).json(err)
        // });
    },


    createInvoiceItem: function (req, res) {
        console.log(req.params)
        //     stripe.invoiceItems.create(req.params)
        //         .then(dbModel => res.json({ results: dbModel }))
        //         .catch(err => res.status(422).json(err));
    }

};
