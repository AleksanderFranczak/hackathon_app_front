import styled from "styled-components";
import React from "react";

const Wrapper = styled.div``;

const StyledInput = styled.input``;

const ImageInput = ({ imageSrc, onChange }) => {
  return (
    <Wrapper>
      <StyledInput type="file" onChange={onChange} />
      <img src={imageSrc} />
    </Wrapper>
  );
};

export default ImageInput;
