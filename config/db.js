const mongoose = require('mongoose');
// const config = require('../config');
const mongoURI = "mongodb://localhost/lunde_water"
// console.log(mongoURI)
const db = process.env.MONGODB_URI || mongoURI

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;