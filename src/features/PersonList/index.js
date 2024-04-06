import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTilesContainer/PersonTile";
import { Container } from "./styled";
import { TilesContainer } from "../../common/Tiles/PersonTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { selectPopularPeopleStatus } from "./popularPeopleSlice";
import noPersonImage from "./no-person-image.png";
import { useCurrentPage } from "./useCurrentPage";
import { usePopularPeopleData } from "./usePopularPeopleData";

const PersonList = () => {
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const popularPeopleData = usePopularPeopleData();
  const currentPage = useCurrentPage();

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
                    : "https://image.tmdb.org/t/p/w185" +
                      popularPeople.profile_path
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
