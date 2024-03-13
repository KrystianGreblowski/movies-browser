import axios from "axios";
import { useState, useEffect } from "react";

export const usePopularMovies = (pageNumber) => {
  const [popularMovies, setPopularMovies] = useState({
    page: 1,
    results: [],
  });

  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setPopularMovies((popularMovies) => (popularMovies = response.data));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPopularMovies();
  }, [apiUrl]);

  const popularMoviesData = popularMovies.results.map(
    ({ id, poster_path, title, release_date, vote_average, vote_count }) => ({
      id,
      poster_path,
      title,
      release_date,
      vote_average,
      vote_count,
    })
  );

  return popularMoviesData;
};
