import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_USER_BYID = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      name
      age
    }
  }
`;

function User() {
  const id = useParams().id;
  const { data, loading, error } = useQuery(GET_USER_BYID, {
    variables: {
      userId: id,
    },
  });
  if (loading) return <h1>Loading Data</h1>;
  return (
    <div>
      {data && (
        <div>
          <p>Name: {data?.user?.name}</p>
          <p>Age: {data.user.age}</p>
        </div>
      )}
      {error && <h1>User not found</h1>}
    </div>
  );
}

export default User;
