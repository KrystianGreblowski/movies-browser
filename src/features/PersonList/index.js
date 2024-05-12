import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import Pagination from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTilesContainer/PersonTile";
import { Container } from "./styled";
import { PageLink } from "../../common/PageLink/styled";
import { PersonTilesContainer } from "../../common/Tiles/PersonTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import {
  fetchPopularPeoplePageNumberForApi,
  selectPopularPeopleData,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import noPersonImage from "../../images/no-person-image.png";
import LoadingPage from "../../common/LoadingPage";
import ErrorPage from "../../common/ErrorPage";
import { toPersonDetails, toPersonList } from "../../core/routes";
import { fetchPersonId } from "../PersonDetails/personDetailsSlice";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import PersonTilePlaceholder from "../../common/Tiles/PersonTilesContainer/PersonTilePlaceholder";
import { setBorder } from "../../common/NavigationBar/Navigation/navigationBorderSlice";

const PersonList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const popularPeopleData = useSelector(selectPopularPeopleData);
  const popularPeopleStatus = useSelector(selectPopularPeopleStatus);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const pageQueryParameter = currentPage === 1 ? "" : `?page=${currentPage}`;
    history.replace(`${toPersonList()}${pageQueryParameter}`);

    dispatch(fetchPopularPeoplePageNumberForApi(currentPage));
  }, [currentPage, history, dispatch]);

  useEffect(() => {
    dispatch(setBorder("people"));
  }, [dispatch]);

  return (
    <>
      {popularPeopleStatus === "loading" ? (
        <LoadingPage />
      ) : popularPeopleStatus === "placeholders" ? (
        <Container>
          <TilesHeader>Popular people</TilesHeader>
          <PersonTilesContainer>
            {popularPeopleData.map(() => (
              <PersonTilePlaceholder image={noPersonImage} key={nanoid()} />
            ))}
          </PersonTilesContainer>
        </Container>
      ) : popularPeopleStatus === "success" ? (
        <Container>
          <TilesHeader>Popular people</TilesHeader>

          <PersonTilesContainer>
            {popularPeopleData.map((popularPerson) => (
              <PageLink
                to={`${toPersonDetails()}/${popularPerson.id}`}
                onClick={() => dispatch(fetchPersonId(popularPerson.id))}
                key={nanoid()}
              >
                <PersonTile
                  image={
                    popularPerson.profile_path === null
                      ? noPersonImage
                      : "https://image.tmdb.org/t/p/w185" +
                        popularPerson.profile_path
                  }
                  name={popularPerson.name}
                />
              </PageLink>
            ))}
          </PersonTilesContainer>

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
