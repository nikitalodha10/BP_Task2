// routes/hostRoutes.js
const express = require('express');
const Host = require('../hostModel'); // Adjust the path as necessary
const router = express.Router();

// Add Host
router.post('/', async (req, res) => {
  try {
    const host = new Host(req.body);
    await host.save();
    res.status(201).json({ message: 'Host added', host });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Host
router.delete('/:id', async (req, res) => {
  try {
    const result = await Host.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Host not found' });
    res.json({ message: 'Host deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Edit Host
router.put('/:id', async (req, res) => {
  try {
    const updatedHost = await Host.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHost) return res.status(404).json({ message: 'Host not found' });
    res.json({ message: 'Host updated', host: updatedHost });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Hosts
router.get('/', async (req, res) => {
  try {
    const hosts = await Host.find();
    res.json(hosts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Host Details
router.get('/:id', async (req, res) => {
  try {
    const host = await Host.findById(req.params.id);
    if (!host) return res.status(404).json({ message: 'Host not found' });
    res.json(host);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
