const express = require('express');
const Material = require('../models/Material')

const router = express.Router();


router.use((req, res, next) => {
  console.log('DEBUG routes/materials');
  next()
})

// Route to get all materials
router.get('/', (req, res, next) => {
  Material.find()
    .then(materials => {
      res.json(materials);
    })
    .catch(err => next(err))
});

// Route to add a material
router.post('/', (req, res, next) => {
  let { name, source, type, description, techs, field, time, materialCreationDate } = req.body
  Material.create({ name, source, type, description, techs, field, time, materialCreationDate })
    .then(material => {
      res.json({
        success: true,
        material
      });
    })
    .catch(err => next(err))
});

module.exports = router;
