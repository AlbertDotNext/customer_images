// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');
const CustomerImage = require('../database/index.js');
// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on


// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', (req, res) => {
  CustomerImage.find({})
    .exec((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.json(data);
      }
    });
});

const PORT = 3003;
// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));