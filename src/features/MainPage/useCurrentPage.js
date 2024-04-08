import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { fetchPopularMoviesPageNumberForApi } from "./popularMoviesSlice";
import { toMainPage } from "../../core/routes";

export const useCurrentPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    currentPage === 1
      ? history.replace(`${toMainPage()}`)
      : history.replace(`${toMainPage()}/page/${currentPage}`);
  }, [currentPage, history]);

  useEffect(() => {
    const numberOfPagesToGetFromApi = 2;
    const numberOfPagesForPagination = 5;

    const getPageNumberForApi = () =>
      currentPage === 1
        ? 1
        : Math.floor((currentPage - 1) / numberOfPagesForPagination) *
            numberOfPagesToGetFromApi +
          1;

    if (
      (currentPage - 1) % numberOfPagesForPagination === 0 ||
      currentPage % numberOfPagesForPagination === 0
    )
      dispatch(fetchPopularMoviesPageNumberForApi(getPageNumberForApi()));
  }, [currentPage, dispatch]);

  return currentPage;
};
