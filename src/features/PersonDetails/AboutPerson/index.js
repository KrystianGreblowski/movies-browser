import { useSelector } from "react-redux";
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
import { selectPersonDetailsData } from "../personDetailsSlice";
import noPersonImage from "../../../images/no-person-profile-image.png";

const AboutPerson = () => {
  const personDetailsData = useSelector(selectPersonDetailsData);

  return (
    <AboutPersonContainer>
      <PersonImage
        src={
          personDetailsData.profile_path === null
            ? noPersonImage
            : "http://image.tmdb.org/t/p/h632" + personDetailsData.profile_path
        }
        alt={personDetailsData.name}
      />

      <PersonDescription>
        <Caption>{personDetailsData.name}</Caption>

        <Details>
          <BirthDetails>
            <Span>Date of birth: </Span>
            <SpanInfo>
              {personDetailsData.birthday.split("-").reverse().join(".")}
            </SpanInfo>
          </BirthDetails>

          <BirthDetails>
            <Span>Place of birth: </Span>
            <SpanInfo>{personDetailsData.place_of_birth}</SpanInfo>
          </BirthDetails>
        </Details>
      </PersonDescription>

      <PersonInformation>{personDetailsData.biography}</PersonInformation>
    </AboutPersonContainer>
  );
};

export default AboutPerson;
