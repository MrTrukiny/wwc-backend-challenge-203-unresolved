const { User } = require('../models')

// This repositories are for make querys tu User, use them in the service.

class UsersRepository {
  async createOne(entity) {
    return User.create(entity);
  }

  async getAll(match) {
    return User.find(match)
  }
}

module.exports = new UsersRepository();
