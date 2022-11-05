import React from "react";
import styled from "styled-components";
import { mockNewOffers } from "../../mockData/new_offers_mock_data";
import TimeAgo from "javascript-time-ago";

import { appColors } from "../utils/colors";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
import { timeAgo } from "../utils/time_ago";
const Wrapper = styled.div`
  /* background-color: white;
  border-radius: 15px;
  display: flex;
  position: relative;
  
   */
  background-color: white;
  display: inline-block;
  margin-right: 64px;
  width: 250px;
  height: 200px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 10px #dfdfdf;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: -30px;
  left: -30px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: "0% 20%";
`;

const OfferName = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 4px;
`;

const OfferDescription = styled.p`
  margin: 0;
  width: 200px;
  white-space: pre-wrap;
`;

const AddTime = styled.p`
  font-size: 14px;
  color: ${appColors.orange};
  margin-bottom: 0;
`;

const NameText = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: absolute;
  top: 48px;
  left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailsWrapper = styled.div`
  position: absolute;
  right: 12px;
`;

const CallToActionButton = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  cursor: pointer;
  color: ${appColors.darkGreen};
  & svg {
    width: 16px;
    height: 16px;
  }

  &::after {
    content: "";
    display: block;
    width: 90%;
    height: 1px;
    margin-top: 2px;
    background: ${appColors.darkGreen};
  }
`;

const SingleOfferItem = ({ offer }) => {
  return (
    <Wrapper>
      <ProfileImage src={mockNewOffers[0].profile} />

      <DetailsWrapper>
        <AddTime>{timeAgo.format(offer.createTime)}</AddTime>
        <NameText>
          {offer.name} {offer.lastName}
        </NameText>
      </DetailsWrapper>
      <Content>
        <OfferName>{offer.offerName}</OfferName>
        <OfferDescription>{offer.description}</OfferDescription>
      </Content>
      <CallToActionButton>
        <span>Zarezerwuj </span>
        <RightArrowAlt />
      </CallToActionButton>
    </Wrapper>
  );
};

export default SingleOfferItem;
