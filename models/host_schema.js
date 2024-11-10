const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  contact: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String 
  }
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;
