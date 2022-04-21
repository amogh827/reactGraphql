const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./schema/resolvers.js");
const { typeDefs } = require("./schema/type-defs.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`App listening on url:${url}`);
});
