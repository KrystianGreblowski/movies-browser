import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTilesContainer/PersonTile";
import { Container } from "./styled";
import { PersonTilesContainer } from "../../common/Tiles/PersonTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { selectPopularPeopleStatus } from "./popularPeopleSlice";
import noPersonImage from "../../images/no-person-image.png";
import { useCurrentPage } from "./useCurrentPage";
import { usePopularPeopleData } from "./usePopularPeopleData";
import { toPersonList } from "../../core/routes";
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";

const PersonList = () => {
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const popularPeopleData = usePopularPeopleData();
  const currentPage = useCurrentPage();

  return (
    <>
      {popularPeopleStatus === "loading" ? (
        <LoadingPage />
      ) : popularPeopleStatus === "success" ? (
        <Container>
          <TilesHeader>Popular people</TilesHeader>

          <PersonTilesContainer>
            {popularPeopleData.map((popularPeople) => (
              <PersonTile
                key={nanoid()}
                image={
                  popularPeople.profile_path === null
                    ? noPersonImage
                    : "https://image.tmdb.org/t/p/w185" +
                      popularPeople.profile_path
                }
                name={popularPeople.name}
              />
            ))}
          </PersonTilesContainer>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={400}
            url={toPersonList()}
          />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default PersonList;
