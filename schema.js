const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    users: [User!]!,
    user(id: Int!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    published: Boolean!
    link: String
    author: User!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    message: String
  }
`);

module.exports = schema;