const router = require('express').Router();
const { UsersController } = require('../controllers');

// Create and schema validator and use it 

router
  .route('/')
  .post(/* schema validator, */ UsersController.createOne)
  .get(UsersController.getAll)

module.exports = router;
