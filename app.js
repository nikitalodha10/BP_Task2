// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/event'); 
const userRoutes = require('./routes/user');
const hostRoutes = require('./routes/host');
const bookingRoutes = require('./routes/booking');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://root:root@cluster0.2vitv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use the event routes
app.use('/event', eventRoutes);
app.use('/user', userRoutes);
app.use('/booking', bookingRoutes);
app.use('/host', hostRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
