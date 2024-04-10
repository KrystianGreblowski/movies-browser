import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieTypesData = () => {
  const [movieTypesData, setMovieTypesData] = useState([]);
  const numberOfMovieTypes = 3;

  useEffect(() => {
    const getMovieTypes = async () => {
      const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
      const language = "en";

      const apiUrl = `
        https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`;

      const response = await axios.get(apiUrl);

      setMovieTypesData(response.data.genres);
    };

    getMovieTypes();
  }, []);

  return { movieTypesData, numberOfMovieTypes };
};
