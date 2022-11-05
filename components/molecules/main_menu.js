import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { appColors } from "../utils/colors";
import AppButton from "../atoms/app_button";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
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

  &::after {
    content: "";
    display: block;

    height: 1px;
    width: ${(props) => (props.active ? "90%" : "0px")};
    background-color: ${appColors.darkGreen};
    margin: 4px auto 0 auto;
    transition: all 0.2s;
  }

  &:hover {
    &::after {
      width: 90%;
    }
  }
`;

const MainMenu = () => {
  const router = useRouter();

  return (
    <Container>
      <StyledList>
        <StyledLink active={router.asPath == "/"} href="/">
          {" "}
          Główna
        </StyledLink>

        <StyledLink active={router.asPath == "/offers"} href="/offers">
          Oferty
        </StyledLink>

        <StyledLink active={router.asPath == "/orders"} href="/orders">
          Twoje zamówienia
        </StyledLink>

        <StyledLink active={router.asPath == "/about"} href="/about">
          O nas
        </StyledLink>
      </StyledList>

      <AppButton onTap={() => router.push("/login")} text="Zaloguj" />
    </Container>
  );
};

export default MainMenu;
