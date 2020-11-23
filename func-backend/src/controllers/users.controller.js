const { createOneUser, getAllByStatus } = require('../services');

const createOne = async (req, res) => {
  // Take user data from req.body

  const response = await createOneUser(/* Send user data to service */);

  // Return status and responses in each case
  // return res.status(400).send(response);
  // return res.status(201).send(response);
};

const getAll = async (req, res) => {
  // Call the service
  const users = await getAllByStatus();

  // Return a proper response
};

module.exports = {
  createOne,
  getAll,
};
