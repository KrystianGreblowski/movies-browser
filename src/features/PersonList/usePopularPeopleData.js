import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPopularPeopleData } from "./popularPeopleSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";

export const usePopularPeopleData = () => {
  const popularPeopleData = useSelector(selectPopularPeopleData);
  const currentPage = useSelector(selectCurrentPage);
  const peoplePerPage = 24;

  const [currentPopularPeople, setCurrentPopularPeople] = useState(
    popularPeopleData.slice(0, peoplePerPage)
  );

  useEffect(() => {
    const indexOfFirstPerson = ((currentPage - 1) % 5) * peoplePerPage;
    const indexOfLastPerson = indexOfFirstPerson + peoplePerPage;

    const currentPopularPeople = popularPeopleData.slice(
      indexOfFirstPerson,
      indexOfLastPerson
    );

    setCurrentPopularPeople(currentPopularPeople);
  }, [popularPeopleData, currentPage]);

  return currentPopularPeople;
};
