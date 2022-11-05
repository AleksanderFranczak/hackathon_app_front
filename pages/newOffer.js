import MainMenu from "../components/molecules/main_menu";
import BasicLayout from "../components/molecules/basic_layout";
import { appColors } from "../components/utils/colors";
import styled from "styled-components";
import AppFormInput from "../components/atoms/app_form_input";
import { useEffect, useState } from "react";
import AppButton from "../components/atoms/app_button";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Title = styled.h1`
  position: relative;
  width: max-content;

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 80%;
    height: 1px;
    margin-top: 3px;
    background-color: ${appColors.darkGreen};
  }
`;

const Description = styled.p`
  max-width: 400px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;

export default function NewOffer() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {}, []);

  const sendData = async () => {
    await axios.post("/api/addNewOffer").then((e) => {
      console.log(e);
    });
  };

  const handleSubmit = (e) => {
    console.log("submitting");
    sendData();
    e.preventDefault();
  };

  return (
    <BasicLayout>
      <Title> Dodaj ogłoszenie</Title>
      <Description>
        Cats making all the muffins if it fits, i sits yet swipe at owner's legs
        for find box a little too small and curl up with fur hanging out . Lick
        the plastic bag meowsiers intently sniff hand,
      </Description>

      <form onSubmit={handleSubmit}>
        <AppFormInput onChange={(e) => setName(e.target.value)} label="Nazwa" />
        <AppFormInput
          onChange={(e) => setDescription(e.target.value)}
          label="Opis"
        />

        <ButtonWrapper>
          <AppButton
            style={{ width: "100%", marginBottom: "16px" }}
            text="Dodaj"
            type="submit"
          />
          <AppButton
            style={{ width: "100%" }}
            text="cofnij"
            isSecondary={true}
          />
        </ButtonWrapper>
      </form>
    </BasicLayout>
  );
}
