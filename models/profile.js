const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilesSchema = new Schema({
    customerId: { type: String, required: false },
    item: { type: Object, required: false },
    app_data: { type: Object, required: false },
    date: { type: String, required: false }

});

const Profile = mongoose.model("Profile", profilesSchema);

module.exports = Profile;
