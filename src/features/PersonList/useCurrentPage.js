import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { fetchPopularPeoplePageNumberForApi } from "./popularPeopleSlice";
import { toPersonList } from "../../core/routes";

export const useCurrentPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const pageQueryParameter = currentPage === 1 ? "" : `?page=${currentPage}`;
    history.replace(`${toPersonList()}${pageQueryParameter}`);
  }, [currentPage, history]);

  useEffect(() => {
    const numberOfPagesToGetFromApi = 9;
    const numberOfPagesForPagination = 10;

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
      dispatch(fetchPopularPeoplePageNumberForApi(getPageNumberForApi()));
  }, [currentPage, dispatch]);

  return currentPage;
};
