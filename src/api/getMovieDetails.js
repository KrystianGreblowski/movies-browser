import axios from "axios";

export const getMovieDetails = async () => {
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const language = "en-US";
  const movieId = 1011985;

  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}&append_to_response=credits`;

  const response = await axios.get(apiUrl);

  return response.data;
};
