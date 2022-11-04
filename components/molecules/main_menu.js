import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { appColors } from "../utils/colors";

const Container = styled.div``;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledLink = styled(Link)`
  list-style: none;
  margin-left: 24px;
  font-weight: 500;
  color: ${appColors.primaryColor};
`;

const MainMenu = () => {
  return (
    <Container>
      <StyledList>
        <StyledLink href="/"> Główna</StyledLink>

        <StyledLink href="/offers">Oferty</StyledLink>

        <StyledLink href="/orders">Orders</StyledLink>

        <StyledLink href="/about">O nas</StyledLink>
      </StyledList>
    </Container>
  );
};

export default MainMenu;
