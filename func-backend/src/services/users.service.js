const { insertOne, getAll } = require('../repositories');

const createOneUser = async (entity) => {
  const { name, birthday, temperature } = entity;
  
  // Ask for conditions
  // if () {}

  // Calculate age
  // const age = getAge(birthday);
  // Ask for new condition
  // if () {}

  // Add age to user

  // Create user
  const user = await insertOne(entity);
  return {
    message: 'Success!',
    data: user,
  };
};

const getAllByStatus = async () => {
  // Create mathching query "{ isPartyng: true }"
  const users = await getAll(match);

  // Ask for condition
  // if (/* Lista vacía de users */) { }
  // Return proper info
  return { message: 'Success!', data: users };
};

// Helper functions

function getAge(dateString) {
  // Find into Internet: "How to get age from birthday JavaScript?"
}

module.exports = { createOneUser, getAllByStatus };
