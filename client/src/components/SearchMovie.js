import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_MOVIE_BYNAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

function SearchMovie() {
  const [movieSearched, setMovieSearched] = useState("");
  const [fetchMovie, { data: movieSearchedData, loading, error }] =
    useLazyQuery(GET_MOVIE_BYNAME);
  if (loading) {
    return <h1>Loading Data</h1>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h1> Search Movie</h1>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        {/* <button onClick={fetchMovie}>M1 Fetch Movie </button> */}
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          M2 Fetch Movie{" "}
        </button>
      </div>
      {movieSearchedData && (
        <div>
          <h1>Movie Name: {movieSearchedData.movie.name}</h1>
          <h1>
            Year Of Publication: {movieSearchedData.movie.yearOfPublication}
          </h1>
        </div>
      )}
      {error && <div>There was an error fetching the data</div>}
    </div>
  );
}

export default SearchMovie;
