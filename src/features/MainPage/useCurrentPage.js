import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { fetchPopularMoviesPageNumberForApi } from "./popularMoviesSlice";

export const useCurrentPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

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
