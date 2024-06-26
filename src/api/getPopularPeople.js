import axios from "axios";

export const getPopularPeople = async (pageNumber) => {
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const language = "en-US";

  const apiUrl = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=${language}&page=${pageNumber}`;

  const response = await axios.get(apiUrl);

  return response.data.results;
};
