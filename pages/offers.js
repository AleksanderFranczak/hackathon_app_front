import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainMenu from "../components/molecules/main_menu";
import BasicLayout from "../components/molecules/basic_layout";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleOfferBigItem from "../components/atoms/single_offer_big_item";
import { TailSpin } from "react-loader-spinner";

export default function Offers() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log("fetching data");
    setLoading(true);
    try {
      axios.post("/api/getOffers").then((e) => {
        setLoading(false);
        console.log(e);
        setData([...e.data]);
      });
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = () => {
    console.log("data", data);
    return data.map((el, index) => (
      <SingleOfferBigItem key={index} offer={el} />
    ));
  };

  return (
    <BasicLayout>
      <h1> Oferty</h1>

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
        renderItems()
      )}
    </BasicLayout>
  );
}
