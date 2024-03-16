import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import {
  Container,
  FirstPage,
  PreviousPage,
  PagesInfo,
  TextInfo,
  NumberInfo,
  NextPage,
  LastPage,
  TextButton,
  LeftArrow,
  RightArrow,
  ButtonsWrapper,
} from "./styled";
import {
  goToFirstPage,
  goToPreviousPage,
  goToNextPage,
  goToLastPage,
} from "./paginationSlice";

const Pagination = ({ currentPage, minPageLimit, maxPageLimit }) => {
  const isLargeMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const dispatch = useDispatch();

  return (
    <Container>
      <ButtonsWrapper>
        <FirstPage onClick={() => dispatch(goToFirstPage())}>
          <LeftArrow />
          {isLargeMobile && <LeftArrow />}
          <TextButton>First</TextButton>
        </FirstPage>

        <PreviousPage onClick={() => dispatch(goToPreviousPage())}>
          <LeftArrow />
          <TextButton>Previous</TextButton>
        </PreviousPage>
      </ButtonsWrapper>

      <PagesInfo>
        <TextInfo>Page</TextInfo>
        <NumberInfo>{currentPage}</NumberInfo>
        <TextInfo>of</TextInfo>
        <NumberInfo>{maxPageLimit}</NumberInfo>
      </PagesInfo>

      <ButtonsWrapper>
        <NextPage onClick={() => dispatch(goToNextPage())}>
          <TextButton>Next</TextButton>
          <RightArrow />
        </NextPage>

        <LastPage onClick={() => dispatch(goToLastPage())}>
          <TextButton>Last</TextButton>
          <RightArrow />
          {isLargeMobile && <RightArrow />}
        </LastPage>
      </ButtonsWrapper>
    </Container>
  );
};

export default Pagination;
