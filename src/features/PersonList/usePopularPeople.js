import axios from "axios";
import { useState, useEffect } from "react";

export const usePopularPeople = (pageNumber) => {
  const [popularPeople, setPopularPeople] = useState({
    page: 1,
    results: [],
  });

  const apiKey = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";
  const apiUrl = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${pageNumber}`;

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setPopularPeople((popularPeople) => (popularPeople = response.data));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPopularPeople();
  }, [apiUrl]);

  const popularPeopleData = popularPeople.results.map(
    ({ id, name, profile_path }) => ({ id, name, profile_path })
  );

  return popularPeopleData;
};
