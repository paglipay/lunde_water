const express = require('express');
const app = express();


// Middleware
app.use(express.json());


const PORT = process.env.PORT || 5000;



// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
