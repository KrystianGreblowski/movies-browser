import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameters";
import axios from "axios";

export const useSearchResults = () => {
  const query = useQueryParameter("search");
  const apiKey = "5b5837d1c9bb80f117b57d1d4ef3d375";
  const location = useLocation();
  const isMoviesPage = location.pathname.startsWith("/movies");
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [searchResults, setSearchResults] = useState({
    status: "",
    data: [],
  });
  useEffect(() => {
    setSearchResults({
      status: "loading",
      data: [],
    });

    const debounce = setTimeout(async () => {
      if (query) {
        const url = `https://api.themoviedb.org/3/search/${
          isMoviesPage ? "movie" : "person"
        }?api_key=${apiKey}&language=en-US&query=${query}&page=${currentPage}`;
        try {
          const response = await axios.get(url);
          setSearchResults({
            status: "success",
            data: response.data,
          });
        } catch (error) {
          setSearchResults({
            status: "error",
          });
          console.log(error.message);
        }
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [query, isMoviesPage, currentPage]);

  return { searchResults };
};
