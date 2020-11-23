const { UsersService } = require('../services');

class UsersController {
  async createOne(req, res) {
    // Take user data from req.body

    const response = await createOneUser(/* Send user data to service */);

    // Return status and responses in each case
    // return res.status(400).send(response);
    // return res.status(201).send(response);
  }

  async getAll(req, res) {
    // Call the service
    const users = await getAllByStatus();

    // Return a proper response
  }
}

module.exports = new UsersController();
