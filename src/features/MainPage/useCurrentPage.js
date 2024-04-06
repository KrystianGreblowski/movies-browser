import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { fetchPageNumberForApi } from "./popularMoviesSlice";

export const useCurrentPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const getPageNumberForApi = () =>
      currentPage === 1 ? 1 : Math.floor((currentPage - 1) / 5) * 2 + 1;

    if ((currentPage - 1) % 5 === 0)
      dispatch(fetchPageNumberForApi(getPageNumberForApi()));
  }, [currentPage, dispatch]);

  return currentPage;
};
