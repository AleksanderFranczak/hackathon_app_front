import React from "react";
import styled from "styled-components";
import MainMenu from "./main_menu";

const Wrapper = styled.div``;

const Content = styled.main`
  padding: 0 64px;
`;

const BasicLayout = ({ children }) => {
  return (
    <Wrapper>
      <MainMenu />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default BasicLayout;
