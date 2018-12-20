const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The material\'s name is required'],
    minlength: 1
  },
  source: String,
  type: { type: String, enum: ['Video', 'Article', 'Documentation'] },
  description: String,
  techs: { type: String, enum: ['JS', 'CSS', 'HTML', 'React', 'Node', 'MongoDB', 'Express'] },
  field: { type: String, enum: ['Front-end', 'Back-end', 'Full-stack'] },
  time: String,
  materialCreationDate: String,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;