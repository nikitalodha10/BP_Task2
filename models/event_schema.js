const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    event_name: { type: String, required: true },
    event_date: { type: Date, required: true },
    event_description: { type: String, required: true },
    location: { type: String, required: true },
    host_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  });


  const Event = mongoose.model('Event', eventSchema);

  module.exports = events;