const Host = require('../models/Host');

exports.addHost = async (req, res) => {
    try {
        const host = await Host.create(req.body);
        res.status(201).json(host);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

