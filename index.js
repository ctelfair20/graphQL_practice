/* index.js */

const express = require("express"); // to create a simple Node.js server
const { graphqlHTTP } = require("express-graphql"); // Express middleware for composing a GraphQL server.
const schema = require("./schema");
const resolvers = require("./resolvers");

/* Connecting our schema to our resolvers and expose our GraphQL endpoint. */
const app = express();

/* use the express-graphql middleware package to connect our schema to our resolvers and expose our GraphQL API at the endpoint /graphql. */
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);


const port = process.env.PORT || 4200;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`);