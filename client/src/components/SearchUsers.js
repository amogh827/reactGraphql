import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USER_BYID = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      name
      nationality
      username
    }
  }
`;

function SearchUsers() {
  const [userId, setUserId] = useState("");
  const [findUser, { data, loading, error }] = useLazyQuery(GET_USER_BYID);
  if (loading) {
    return <h1>Data Loading</h1>;
  }
  return (
    <div>
      <h1>Search Users</h1>
      <div>
        <input
          type="text"
          placeholder="Enter User Id"
          onChange={(event) => {
            setUserId(event.target.value);
          }}
        />
        <button
          onClick={() => {
            findUser({
              variables: {
                userId: userId,
              },
            });
          }}
        >
          Fetch User
        </button>
        {data && (
          <div>
            <p>Name: {data.user.name}</p>
            <p>Username: {data.user.username}</p>
            <p>Nationality: {data.user.nationality}</p>
          </div>
        )}
        {error && <h1>There was an error in fetching the data</h1>}
      </div>
    </div>
  );
}

export default SearchUsers;
