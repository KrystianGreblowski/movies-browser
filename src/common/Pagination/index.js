import { useMediaQuery } from "react-responsive";
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

const Pagination = (currentPage, minPageLimit, maxPageLimit) => {
  const isLargeMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <Container>
      <ButtonsWrapper>
        <FirstPage>
          <LeftArrow />
          {isLargeMobile && <LeftArrow />}
          <TextButton>First</TextButton>
        </FirstPage>

        <PreviousPage>
          <LeftArrow />
          <TextButton>Previous</TextButton>
        </PreviousPage>
      </ButtonsWrapper>

      <PagesInfo>
        <TextInfo>Page</TextInfo>
        <NumberInfo>1</NumberInfo>
        <TextInfo>of</TextInfo>
        <NumberInfo>500</NumberInfo>
      </PagesInfo>

      <ButtonsWrapper>
        <NextPage>
          <TextButton>Next</TextButton>
          <RightArrow />
        </NextPage>

        <LastPage>
          <TextButton>Last</TextButton>
          <RightArrow />
          {isLargeMobile && <RightArrow />}
        </LastPage>
      </ButtonsWrapper>
    </Container>
  );
};

export default Pagination;
