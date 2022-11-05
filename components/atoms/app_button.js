import styled from "styled-components";
import React from "react";
import { appColors } from "../utils/colors";

const ButtonWrapper = styled.div`
  padding: 12px 24px;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  background-color: ${(props) =>
    props.secondary ? "white" : appColors.darkGreen};
  color: ${(props) => (props.secondary ? appColors.darkGreen : "white")};
  cursor: pointer;
  width: max-content;
`;

const AppButton = ({ text, isSecondary }) => {
  return (
    <ButtonWrapper secondary={isSecondary}>
      <span> {text}</span>
    </ButtonWrapper>
  );
};

export default AppButton;
