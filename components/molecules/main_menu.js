import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { appColors } from "../utils/colors";

const Container = styled.div`
  padding: 0 32px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  list-style: none;
  margin-right: 48px;
  font-weight: 500;
  color: ${appColors.primaryColor};
  font-size: 18px;
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
