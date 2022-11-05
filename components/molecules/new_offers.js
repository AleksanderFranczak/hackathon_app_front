import React, { useState } from "react";
import styled from "styled-components";
import { appColors } from "../utils/colors";
import Link from "next/link";
import SingleOfferItem from "../atoms/single_offer_item";
import { mockNewOffers } from "../../mockData/new_offers_mock_data";

const Container = styled.div`
  border-radius: 30px;
  width: 100%;
  background-color: ${appColors.darkGreen};
  padding: 32px;
  -webkit-box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -8px rgba(66, 68, 90, 1);
  color: "white";
`;

const Title = styled.h2`
  color: white;
  font-weight: 400;
  margin-bottom: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${appColors.pink};
  font-weight: 500;
  align-self: flex-end;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80%;
    margin-top: 4px;
    background-color: ${appColors.pink};
    height: 1px;
  }
`;

const NewOffersWrapper = styled.div`
  margin: 64px 32px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1;
  overflow: auto;
`;

const NewOffers = ({}) => {
  const latestOffers = mockNewOffers;
  const [index, setIndex] = useState(0);

  const renderNewOffers = () => {
    return latestOffers.map((el) => <SingleOfferItem offer={el} />);
  };
  return (
    <Container>
      <TextWrapper>
        <Title>Najnowsze ogłoszenia</Title>
        <StyledLink href="/offers">Wyświetl wszystkie</StyledLink>
      </TextWrapper>
      <NewOffersWrapper>{renderNewOffers()}</NewOffersWrapper>
    </Container>
  );
};

export default NewOffers;
