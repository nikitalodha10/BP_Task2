const express = require('express');
const Booking = require('../models/bookind_schema.js'); // Adjust the path as necessary
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});