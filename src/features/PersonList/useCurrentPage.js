import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { fetchPopularPeoplePageNumberForApi } from "./popularPeopleSlice";

export const useCurrentPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const getPageNumberForApi = () =>
      currentPage === 1 ? 1 : Math.floor((currentPage - 1) / 5) * 6 + 1;

    if ((currentPage - 1) % 5 === 0 || currentPage % 5 === 0)
      dispatch(fetchPopularPeoplePageNumberForApi(getPageNumberForApi()));
  }, [currentPage, dispatch]);

  return currentPage;
};
