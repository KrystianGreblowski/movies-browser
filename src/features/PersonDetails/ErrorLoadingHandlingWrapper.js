import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectPersonDetailsStatus,
  selectPersonDetailsData,
} from "./personDetailsSlice";
import ErrorPage from "../../common/ErrorPage";
import LoadingPage from "../../common/LoadingPage";
const ErrorLoadingHandlingWrapper = ({ children }) => {
  const [errorShown, setErrorShown] = useState(false);
  const [loadingShown, setLoadingShown] = useState(true);
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const personDetailsData = useSelector(selectPersonDetailsData);

  useEffect(() => {
    if (personDetailsStatus === "error" || !personDetailsData) {
      if (!errorShown) {
        setTimeout(() => {
          setErrorShown(true);
          setLoadingShown(false);
        }, 0);
      }
    }else {
      setLoadingShown(false);
    }
  }, [personDetailsData, personDetailsStatus, errorShown]);
  if (loadingShown) {
    return <LoadingPage />;
  }
  
  if (personDetailsStatus === "error" || !personDetailsData) {
    if (errorShown) {
      return <ErrorPage />;
    }
    return null;
  }

  return <>{children}</>;
};

export default ErrorLoadingHandlingWrapper;
