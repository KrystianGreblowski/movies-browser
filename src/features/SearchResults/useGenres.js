import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "?api_key=5b5837d1c9bb80f117b57d1d4ef3d375";
const url = `https://api.themoviedb.org/3/genre/movie/list${apiKey}`;

export const useGenres = () => {
  const [genres, setGenres] = useState({
    data: [],
    status: "loading",
  });

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(url);
        setGenres({
          status: "success",
          data: response.data.genres,
        });
      } catch (err) {
        setGenres({
          status: "error",
        });
        console.error(err.message);
      }
    };
    setTimeout(getGenres, 500);
  }, []);

  return { genres };
};
