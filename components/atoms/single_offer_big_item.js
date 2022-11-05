import styled from "styled-components";
import React from "react";
import { appColors } from "../utils/colors";
import { timeAgo } from "../utils/time_ago";
import { CheckmarkCircle2Outline } from "@styled-icons/evaicons-outline/CheckmarkCircle2Outline";
import AppButton from "./app_button";

const Wrapper = styled.div`
  background: white;
  border-radius: 15px;
  padding: 24px;
  border: 1px solid black;
  margin-bottom: 32px;
`;

const Title = styled.p`
  margin-top: 0;

  font-size: 18px;
  font-weight: 500;
`;

const Description = styled.span``;

const AddTime = styled.p`
  font-size: 14px;
  color: ${appColors.orange};
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 12px;
`;

const ItemAvailable = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    color: ${appColors.lightGreen};
    width: 30px;
    margin-right: 6px;
  }
`;

const SingleOfferBigItem = ({ offer }) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Title>{offer.name}</Title>

        <AddTime>{timeAgo.format(new Date(offer.creation_date))}</AddTime>
      </div>
      <Description>{offer.description}</Description>

      {offer.status && (
        <ItemAvailable>
          <div style={{ width: "max-content" }}>
            <CheckmarkCircle2Outline />
            <span>Produkt dostępny!</span>
          </div>

          <AppButton style={{ justifySelf: "flex-end" }} text="Zarezerwuj" />
        </ItemAvailable>
      )}
    </Wrapper>
  );
};

export default SingleOfferBigItem;
