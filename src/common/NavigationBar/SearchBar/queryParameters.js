import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import {
  toMainPage,
  toPersonList,
  toMoviesSearch,
  toPeopleSearch,
} from "../../../core/routes";

export const useQueryParameter = (search) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(search);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search || "");
  const isMoviePage = location.pathname.startsWith("/movies");

  return ({ key, value, resetPage }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    let newPath;
    if (key === "search" && !value) {
      newPath = isMoviePage ? toMainPage() : toPersonList();
    } else {
      newPath = isMoviePage ? toMoviesSearch() : toPeopleSearch();
    }

    if (key === "search" && resetPage === true) {
      searchParams.set("page", "1");
    }

    const currentPage = parseInt(searchParams.get("page")) || 1;
    const currentQuery = searchParams.get("search");
    let urlParams = `page=${currentPage}`;

    if (currentQuery) {
      urlParams += `&search=${currentQuery}`;
    }

    history.replace(`${newPath}?${urlParams}`);
  };
};
