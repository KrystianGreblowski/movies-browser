import axios from "axios";

export const getPopularMovies = async (pageNumber) => {
  try {
    const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`;

    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
