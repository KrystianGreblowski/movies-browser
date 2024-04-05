import {
  AboutPersonContainer,
  BirthDetails,
  Caption,
  Details,
  PersonDescription,
  PersonImage,
  PersonInformation,
  Span,
  SpanInfo,
} from "./styled";
import personImage from "../../../images/PersonImage.png";

const AboutPerson = () => {
  return (
    <AboutPersonContainer>
      <PersonImage src={personImage} alt="Example Person Image" />
      <PersonDescription>
        <Caption>Liu Yifei</Caption>
        <Details>
          <BirthDetails>
            <Span>Date of birth: </Span>
            <SpanInfo>25.08.1987</SpanInfo>
          </BirthDetails>
          <BirthDetails>
            <Span>Place of birth: </Span>
            <SpanInfo>Wuhan, Hubei, China</SpanInfo>
          </BirthDetails>
        </Details>
      </PersonDescription>
      <PersonInformation>
        Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th,
        1987. She began modeling at the age of 8 and was trained in singing,
        dancing and the piano. Moving to the United States at 10 with her
        mother, Liu lived there for four years.
      </PersonInformation>
    </AboutPersonContainer>
  );
};

export default AboutPerson;
