const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
// const bodyParser = require('body-parser');



// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
const PORT = process.env.PORT || 5000;


// API and View routes
app.use(routes);

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lunde-water-two",
//   {
//     useNewUrlParser: true,
//   },
//   () => {
//     console.log('Mongoose is Connected');
//   });


app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
