import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTile";
import Title from "./Title";
import { Container, Tiles, LoadingPage, ErrorPage } from "./styled";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import {
  fetchCurrentPage,
  selectPopularPeopleData,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import noPersonImage from "./images/no-person-image.svg";

const PersonList = () => {
  const popularPeopleData = useSelector(selectPopularPeopleData);
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const currentPage = useSelector(selectCurrentPage);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <>
      {popularPeopleStatus === "loading" ? (
        <LoadingPage />
      ) : popularPeopleStatus === "done" ? (
        <Container>
          <Title title={"Popular people"} />

          <Tiles>
            {popularPeopleData.map((popularPeople) => (
              <PersonTile
                key={popularPeople.id}
                image={
                  popularPeople.profile_path === null
                    ? noPersonImage
                    : imageBaseUrl + popularPeople.profile_path
                }
                name={popularPeople.name}
              />
            ))}
          </Tiles>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={500}
          />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default PersonList;
