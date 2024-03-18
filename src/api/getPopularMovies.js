import axios from "axios";

export const getPopularMovies = async (pageNumber) => {
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`;

  const response = await axios.get(apiUrl);

  return response.data.results;
};
