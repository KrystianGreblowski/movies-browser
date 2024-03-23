import axios from "axios";

export const getSearchQueryParameters = async () => {
  const apiKey = "5b5837d1c9bb80f117b57d1d4ef3d375";
  const apiUrl = `https://api.themoviedb.org/3/movie?api_key=${apiKey}&page=1`;

  const response = await axios.get(apiUrl);
  
  return response.data;
};
