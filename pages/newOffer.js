import MainMenu from "../components/molecules/main_menu";
import BasicLayout from "../components/molecules/basic_layout";
import { appColors } from "../components/utils/colors";
import styled from "styled-components";
import AppFormInput from "../components/atoms/app_form_input";
import { useEffect, useState } from "react";
import AppButton from "../components/atoms/app_button";
import axios from "axios";
import ImageInput from "../components/atoms/image_input";
import { ShutDown } from "styled-icons/remix-fill";
import { URL } from "url";
import OfferAddedSuccesModal from "../components/atoms/offer_added_success_modal";
import { FaceRollingEyesDimensions } from "@styled-icons/fa-regular/FaceRollingEyes";
import { TailSpin } from "react-loader-spinner";

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

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const sendData = async () => {
    setLoading(true);
    try {
      await axios
        .post("/api/addNewOffer", {
          name,
          description,
        })
        .then((e) => {
          console.log(e);
          setVisible(true);
          setLoading(false);
          setName(null);
          setDescription(null);
        });
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  const handleSubmit = (e) => {
    if (name && description) {
      sendData();
    }
    e.preventDefault();
  };

  return (
    <BasicLayout>
      <OfferAddedSuccesModal isOpen={visible} setIsOpen={setVisible} />
      <Title> Dodaj ogłoszenie</Title>
      <Description>
        Cats making all the muffins if it fits, i sits yet swipe at owner's legs
        for find box a little too small and curl up with fur hanging out . Lick
        the plastic bag meowsiers intently sniff hand,
      </Description>

      <form onSubmit={handleSubmit}>
        <AppFormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nazwa"
        />
        <AppFormInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Opis"
        />
        {loading ? (
          <TailSpin
            height="80"
            width="80"
            color="#0f5057"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
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
        )}
      </form>
    </BasicLayout>
  );
}
