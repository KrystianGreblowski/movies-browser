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
        <FirstPage
          onClick={() => dispatch(goToFirstPage())}
          disabled={currentPage <= minPageLimit}
        >
          <LeftArrow $isButtonDisabled={currentPage <= minPageLimit} />
          {isLargeMobile && (
            <LeftArrow $isButtonDisabled={currentPage <= minPageLimit} />
          )}
          <TextButton>First</TextButton>
        </FirstPage>

        <PreviousPage
          onClick={() => dispatch(goToPreviousPage())}
          disabled={currentPage <= minPageLimit}
        >
          <LeftArrow $isButtonDisabled={currentPage <= minPageLimit} />
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
        <NextPage
          onClick={() => dispatch(goToNextPage())}
          disabled={currentPage >= maxPageLimit}
        >
          <TextButton>Next</TextButton>
          <RightArrow $isButtonDisabled={currentPage >= maxPageLimit} />
        </NextPage>

        <LastPage
          onClick={() => dispatch(goToLastPage())}
          disabled={currentPage >= maxPageLimit}
        >
          <TextButton>Last</TextButton>
          <RightArrow $isButtonDisabled={currentPage >= maxPageLimit} />
          {isLargeMobile && (
            <RightArrow $isButtonDisabled={currentPage >= maxPageLimit} />
          )}
        </LastPage>
      </ButtonsWrapper>
    </Container>
  );
};

export default Pagination;
