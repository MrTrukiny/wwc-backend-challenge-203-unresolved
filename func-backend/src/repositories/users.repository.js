const { User } = require('../models');

// This repositories are for make querys tu User, use them in the service.

const insertOne = async (entity) => {
  return User.create(entity);
};

const getAll = async (match) => {
  return User.find(match);
};

module.exports = { insertOne, getAll };
