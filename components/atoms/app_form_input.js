import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const Label = styled.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.7);
`;

const StyledInput = styled.input`
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  min-width: 250px;
  outline: none;

  &:focus {
    border: 1px solid #0f5057;
    -webkit-box-shadow: 8px 8px 24px -8px rgba(15, 80, 87, 0.5);
    -moz-box-shadow: 8px 8px 24px -8px rgba(15, 80, 87, 0.5);
    box-shadow: 8px 8px 24px -8px rgba(15, 80, 87, 0.5);
    transition: box-shadow 0.2s;
  }
`;

const AppFormInput = ({ label, type, onChange }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput onChange={onChange} />
    </Wrapper>
  );
};

export default AppFormInput;
