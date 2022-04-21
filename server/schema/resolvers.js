const { UserList, MovieList } = require("../fakeData.js");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(_, args) {
      return UserList.find(({ id }) => id === Number(args.id));
    },
    movies() {
      return MovieList;
    },
    movie(_, args) {
      return MovieList.find(({ name }) => name === args.name);
    },
  },
  User: {
    favouriteMovies: () => {
      return MovieList.filter(
        ({ yearOfPublication }) =>
          yearOfPublication >= 2000 && yearOfPublication <= 2010
      );
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const user = args.input;
      const lastId = UserList.at(-1).id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUserName: (_, args) => {
      const newUser = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(newUser.id)) {
          user.username = newUser.newUserName;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser(_, args) {
      console.log(args);
      const id = UserList.findIndex(({ id }) => id === Number(args.input));
      if (id === -1) return "User not found";
      UserList.splice(id, 1);
      return "User Deleted";
    },
  },
};

module.exports = { resolvers };
