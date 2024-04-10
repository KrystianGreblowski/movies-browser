import axios from "axios";

export const getPersonDetails = async (personId) => {
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const language = "en-US";

  const apiUrl = `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=${language}&append_to_response=movie_credits`;

  const response = await axios.get(apiUrl);

  console.log(response.data);

  return response.data;
};
