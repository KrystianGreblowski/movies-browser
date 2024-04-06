import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg";

export const NoResultsImage = styled(Picture)`
  width: 668px;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const NoResultsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 40px;
`;
