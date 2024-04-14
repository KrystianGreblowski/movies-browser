import { useSelector } from "react-redux";
import {
  AboutPersonContainerPlaceholder,
  PersonImagePlaceholder,
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
import {
  selectPersonDetailsData,
  selectPersonDetailsStatus,
} from "../personDetailsSlice";
import noPersonProfileImage from "../../../images/no-person-profile-image.png";

const AboutPerson = () => {
  const personDetailsData = useSelector(selectPersonDetailsData);
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const isPersonInfomationLong = personDetailsData.biography.length > 1000;

  return personDetailsStatus === "placeholders" ? (
    <AboutPersonContainerPlaceholder>
      <PersonImagePlaceholder
        src={noPersonProfileImage}
        alt={"noPersonProfileImage"}
      />
    </AboutPersonContainerPlaceholder>
  ) : (
    <AboutPersonContainer>
      <PersonImage
        $longPersonInformation={isPersonInfomationLong}
        src={
          personDetailsData.profile_path === null
            ? noPersonProfileImage
            : "http://image.tmdb.org/t/p/h632" + personDetailsData.profile_path
        }
        alt={personDetailsData.name}
      />

      <PersonDescription $longPersonInformation={isPersonInfomationLong}>
        <Caption>{personDetailsData.name}</Caption>

        <Details>
          <BirthDetails>
            <Span>Date of birth: </Span>
            <SpanInfo>
              {personDetailsData.birthday &&
                personDetailsData.birthday.split("-").reverse().join(".")}
            </SpanInfo>
          </BirthDetails>

          <BirthDetails>
            <Span>Place of birth: </Span>
            <SpanInfo>{personDetailsData.place_of_birth}</SpanInfo>
          </BirthDetails>
        </Details>
      </PersonDescription>

      <PersonInformation $longPersonInformation={isPersonInfomationLong}>
        {personDetailsData.biography}
      </PersonInformation>
    </AboutPersonContainer>
  );
};

export default AboutPerson;
