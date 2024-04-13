import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../common/NavigationBar/SearchBar/queryParameters";
import axios from "axios";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";

export const useSearchResults = () => {
  const query = useQueryParameter("search");
  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const location = useLocation();
  const isMoviesPage = location.pathname.startsWith("/movies");
  const currentPage = useSelector(selectCurrentPage);

  const [searchResults, setSearchResults] = useState({
    status: "loading",
    data: [],
  });

  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    replaceQueryParameter({ key: "page", value: currentPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
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
    }, 500);
    return () => clearTimeout(debounce);
  }, [query, isMoviesPage, currentPage]);

  return { searchResults };
};
