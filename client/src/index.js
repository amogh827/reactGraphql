import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Users from "./components/UsersList";
import MoviesList from "./components/MoviesList";
import SearchMovie from "./components/SearchMovie";
import SearchUsers from "./components/SearchUsers";
import User from "./components/User";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:id" element={<User />}></Route>
          <Route path="movies" element={<MoviesList />}></Route>
          <Route path="searchMovie" element={<SearchMovie />}></Route>
          <Route path="searchUsers" element={<SearchUsers />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
