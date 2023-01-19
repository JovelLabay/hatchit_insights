const { User } = require('../model/sample.model');

async function getUsers() {
  const users = await User.findAll();
  return users;
}

async function addUser({ firstName, lastName, id, token }) {
  if (token === '1234567890' && id === 'qwerty') {
    const user = await User.create({ firstName, lastName });
    return {
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: new Date(user.createdAt),
      },
      message: 'User added successfully',
      status: 200,
    };
  } else {
    return {
      message: 'Unauthorized',
      payload: 'Invalid token or id',
      status: 401,
    };
  }
}

module.exports = { getUsers, addUser };
