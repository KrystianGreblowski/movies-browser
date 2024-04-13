import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectMovieDetailsStatus,
  selectMovieDetailsData,
} from "./movieDetailsSlice";
import ErrorPage from "../../common/ErrorPage";
import LoadingPage from "../../common/LoadingPage";
const ErrorLoadingHandlingWrapper = ({ children }) => {
  const [errorShown, setErrorShown] = useState(false);
  const [loadingShown, setLoadingShown] = useState(true);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const movieDetailsData = useSelector(selectMovieDetailsData);

  useEffect(() => {
    if (movieDetailsStatus === "error" || !movieDetailsData) {
      if (!errorShown) {
        setTimeout(() => {
          setErrorShown(true);
          setLoadingShown(false);
        }, 500);
      }
    }else {
      setLoadingShown(false);
    }
  }, [movieDetailsData, movieDetailsStatus, errorShown]);
  if (loadingShown) {
    return <LoadingPage />;
  }
  
  if (movieDetailsStatus === "error" || !movieDetailsData) {
    if (errorShown) {
      return <ErrorPage />;
    }
    return null;
  }

  return <>{children}</>;
};

export default ErrorLoadingHandlingWrapper;
