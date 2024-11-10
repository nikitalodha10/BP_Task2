// src/routes/eventRoutes.js
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Add Event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send({ error: 'Error creating event: ' + error.message });
  }
});

// Get All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching events: ' + error.message });
  }
});

// Get Event Details
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching event: ' + error.message });
  }
});

// Edit Event
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send({ error: 'Error updating event: ' + error.message });
  }
});

// Delete Event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(500).send({ error: 'Error deleting event: ' + error.message });
  }
});

router.get('/:id/bookings', async (req, res) => {
  try {
    const bookings = []; 
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching bookings: ' + error.message });
  }
});

module.exports = router;
