// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectMovieDetailsStatus, selectMovieDetailsData } from "./movieDetailsSlice";
// import ErrorPage from "../../common/ErrorPage";

// const useErrorHandling = () => {
//   const [errorShown, setErrorShown] = useState(false);
//   const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
//   const movieDetailsData = useSelector(selectMovieDetailsData);

//   if (movieDetailsStatus === "error" || !movieDetailsData) {
//     if (!errorShown) {
//       setErrorShown(true);
//       return <ErrorPage />;
//     }
//     return null;
//   }

//   return { errorShown };
// };

// export default useErrorHandling;