const router = require('express').Router();
const { createOne, getAll } = require('../controllers');

// Create and schema validator and use it 

router
  .route('/')
  .post(/* schema validator, */ createOne)
  .get(getAll)

module.exports = router;
