import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTilesContainer/PersonTile";
import { Container } from "./styled";
import { TilesContainer } from "../../common/Tiles/PersonTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import {
  fetchCurrentPeoplePage,
  selectPopularPeopleData,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import noPersonImage from "./no-person-image.png";

const PersonList = () => {
  const popularPeopleData = useSelector(selectPopularPeopleData);
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const currentPage = useSelector(selectCurrentPage);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPeoplePage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <>
      {popularPeopleStatus === "loading" ? (
        "Loading"
      ) : popularPeopleStatus === "done" ? (
        <Container>
          <TilesHeader>Popular people</TilesHeader>

          <TilesContainer>
            {popularPeopleData.map((popularPeople) => (
              <PersonTile
                key={nanoid()}
                image={
                  popularPeople.profile_path === null
                    ? noPersonImage
                    : imageBaseUrl + popularPeople.profile_path
                }
                name={popularPeople.name}
              />
            ))}
          </TilesContainer>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={100}
            url="/personlist"
          />
        </Container>
      ) : (
        "Error"
      )}
    </>
  );
};

export default PersonList;
