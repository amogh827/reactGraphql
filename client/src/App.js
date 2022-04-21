import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Link, Outlet } from "react-router-dom";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://4000-gitpodio-springpetclinic-i0sxjxtd2i5.ws-us39a.gitpod.io/",
  });
  return (
    <ApolloProvider client={client}>
      <div className="navbar">
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="Movies">Movies</Link>
          </li>
          <li>
            <Link to="searchMovie">Search Movies</Link>
          </li>
          <li>
            <Link to="searchUsers">Search Users</Link>
          </li>
        </ul>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
