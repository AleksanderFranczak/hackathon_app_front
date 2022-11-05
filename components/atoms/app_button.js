import styled from "styled-components";
import React from "react";
import { appColors } from "../utils/colors";

const ButtonWrapper = styled.button`
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
  height: min-content;
  border: ${(props) => (props.secondary ? "2px solid #0f5057" : "none")};
  & span {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  }
`;

const AppButton = ({ text, isSecondary, style, onTap }) => {
  return (
    <ButtonWrapper onClick={onTap} style={style} secondary={isSecondary}>
      <span> {text}</span>
    </ButtonWrapper>
  );
};

export default AppButton;
