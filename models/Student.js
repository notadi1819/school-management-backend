const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  attendance: { type: String, default: 'Pending' },
  feeStatus: { type: String, default: 'Unpaid' },
  lastUpdated: { type: Date, default: Date.now },
  feeUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
