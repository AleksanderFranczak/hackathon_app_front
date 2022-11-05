import styled from "styled-components";
import React from "react";
import AppButton from "./app_button";
import { CheckmarkCircle2Outline } from "@styled-icons/evaicons-outline/CheckmarkCircle2Outline";
import { appColors } from "../utils/colors";
import { useRouter } from "next/router";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 400px;
  background: white;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & svg {
    color: ${appColors.lightGreen};
    width: 60px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 32px;
  margin-top: 0;
  text-align: center;
`;

const OfferAddedSuccesModal = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const handleClose = (e) => {
    if (e.target == e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <Background onClick={handleClose} visible={isOpen}>
      <Content onClick={() => null}>
        <CheckmarkCircle2Outline />
        <Title>Pomyślnie dodano nową ofertę</Title>
        <Description>
          Ogłoszenie zostało dodane na stronę, dziękujemy za Twoją pomoc!
        </Description>

        <AppButton
          onTap={() => router.push("/offers")}
          style={{ marginBottom: "16px", width: "100%" }}
          text="Twoje ogłoszenia"
        />
        <AppButton
          onTap={() => setIsOpen(false)}
          style={{ width: "100%" }}
          isSecondary={true}
          text="Zamknij"
        />
      </Content>
    </Background>
  );
};

export default OfferAddedSuccesModal;
