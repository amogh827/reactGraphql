const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = INDIA
  }

  input UpdateUserNameInput {
    id: ID!
    newUserName: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUserName(input: UpdateUserNameInput!): User
    deleteUser(input: ID!): String!
  }
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    CHILE
    GERMANY
  }
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
`;

module.exports = { typeDefs };
