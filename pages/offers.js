import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainMenu from "../components/molecules/main_menu";
import BasicLayout from "../components/molecules/basic_layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Offers() {
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    console.log("fetching data");
    setLoading(true);
    try {
      axios.post("/api/getOffers").then((e) => {
        setLoading(false);
        console.log(e);
        setOffers(...e.data);
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = () => {};

  return (
    <BasicLayout>
      <h1> Oferty</h1>
    </BasicLayout>
  );
}
