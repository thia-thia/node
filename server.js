const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle booking submissions
app.post('/submitBooking', (req, res) => {
    const bookingDetails = req.body;
    console.log('Booking Details Received:', bookingDetails);
    res.send('Booking details received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
