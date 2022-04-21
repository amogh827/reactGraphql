import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

function DisplayData() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  if (loading) return <h1>Data is Loading</h1>;

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h1>Users List</h1>
      <div>
        {data?.users.map(({ id, name, age, username, nationality }) => {
          return (
            <div key={id}>
              <h1>
                Name: <Link to={`/users/${id}`}>{name}</Link>
              </h1>
              <p>Username: {username}</p>
              <p>age: {age}</p>
              <p>Nationality: {name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayData;
