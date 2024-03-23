import {
    useHistory,
    useLocation,
  } from "react-router-dom/cjs/react-router-dom.min";
  
  export const useQueryParameter = (search) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(search);
  };
  
  export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location?.search || ``);  

    const isMoviePage = location.pathname.startsWith("/movies");

    return ({ key, value }) => {
  
      if (value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
  
      let newPath = isMoviePage ? "/movies" : "/people";

      newPath += `?${searchParams.toString()}`

      history.replace(newPath);
    };
  };
  