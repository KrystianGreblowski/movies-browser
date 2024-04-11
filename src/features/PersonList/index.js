import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTilesContainer/PersonTile";
import { Container, PersonPageLink } from "./styled";
import { PersonTilesContainer } from "../../common/Tiles/PersonTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { selectPopularPeopleStatus } from "./popularPeopleSlice";
import noPersonImage from "../../images/no-person-image.png";
import { useCurrentPage } from "./useCurrentPage";
import { usePopularPeopleData } from "./usePopularPeopleData";
import { toPersonList } from "../../core/routes";
import { fetchPersonId } from "../PersonDetails/personDetailsSlice";

const PersonList = () => {
  const dispatch = useDispatch();
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const popularPeopleData = usePopularPeopleData();
  const currentPage = useCurrentPage();

  return (
    <>
      {popularPeopleStatus === "loading" ? (
        ""
      ) : popularPeopleStatus === "success" ? (
        <Container>
          <TilesHeader>Popular people</TilesHeader>

          <PersonTilesContainer>
            {popularPeopleData.map((popularPerson) => (
              <PersonPageLink
                to={`/people/${popularPerson.id}`}
                onClick={() => dispatch(fetchPersonId(popularPerson.id))}
                key={nanoid()}
              >
                <PersonTile
                  key={nanoid()}
                  image={
                    popularPerson.profile_path === null
                      ? noPersonImage
                      : "https://image.tmdb.org/t/p/w185" +
                        popularPerson.profile_path
                  }
                  name={popularPerson.name}
                />
              </PersonPageLink>
            ))}
          </PersonTilesContainer>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={500}
            url={toPersonList()}
          />
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default PersonList;
