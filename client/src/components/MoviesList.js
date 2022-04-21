import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES_LIST = gql`
  query getAllMovies {
    movies {
      id
      name
      yearOfPublication
    }
  }
`;

function MoviesList() {
  const { data, loading } = useQuery(GET_MOVIES_LIST);
  console.log(data);
  if (loading) return <h1>Data is loading</h1>;
  return (
    <div>
      <h1> Movies List </h1>
      {data?.movies?.map(({ id, name, yearOfPublication }) => {
        return (
          <div key={id}>
            <h1>Name: {name}</h1>
            <p>Year Of Publication: {yearOfPublication}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesList;
