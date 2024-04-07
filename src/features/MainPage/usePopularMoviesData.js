import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPopularMoviesData } from "./popularMoviesSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";

export const usePopularMoviesData = () => {
  const popularMoviesData = useSelector(selectPopularMoviesData);
  const currentPage = useSelector(selectCurrentPage);
  const moviesPerPage = 8;

  const [currentPopularMovies, setCurrentPopularMovies] = useState(
    popularMoviesData.slice(0, moviesPerPage)
  );

  useEffect(() => {
    const indexOfFirstMovie = ((currentPage - 1) % 5) * moviesPerPage;
    const indexOfLastMovie = indexOfFirstMovie + moviesPerPage;

    const currentPopularMovies = popularMoviesData.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );

    setCurrentPopularMovies(currentPopularMovies);
  }, [popularMoviesData, currentPage]);

  return currentPopularMovies;
};
