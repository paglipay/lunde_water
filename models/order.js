const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    customerId: { type: String, required: false },
    InvoiceId: { type: String, required: false },
    date: { type: String, required: false }

});

const Order = mongoose.model("Order", ordersSchema);

module.exports = Order;
