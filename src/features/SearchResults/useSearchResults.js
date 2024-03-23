import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    


}