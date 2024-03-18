import axios from "axios";

export const getMovieTypes = async () => {
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const apiUrl = `
  https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

  const response = await axios.get(apiUrl);

  return response.data;
};
