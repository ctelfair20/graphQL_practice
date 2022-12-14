/* resolvers.js*/

/* Import data source */
const { Users } = require('./data');

const resolvers = {
  users: async (_) => {
    return Users;
  },
  user: async ({ id }, context) => {
    /* .find() takes a function as input and returns the firt match */
    return Users.find((user) => user.id == id)
  }
}

module.exports = resolvers;
