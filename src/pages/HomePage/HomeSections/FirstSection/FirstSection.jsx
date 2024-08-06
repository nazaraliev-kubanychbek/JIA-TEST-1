import styles from "./FirstSection.module.scss";
import bgImg from "@img/homepageImg/MainPage.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { background } from "@img/BIF2016.webp";

export const FirstSection = () => {
  const [data, setData] = useState({});
  const lang = useSelector((s) => s.reducer.lang);

  useEffect(() => {
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/banner/`)
      .then(({ data }) =>{
        data.length > 0
        ?  setData(data[0])
        :  setData({
            image: "",
            title: "",
            descriptions: "",
          });
      })
      .catch(() => {
        setData({
          image: "",
          title: "",
          descriptions: "",
        });
      });
  }, [lang]);
  return (
    <section className={styles.container}>
      <img src={data.image} alt="" />
      <div className={styles.text}>
        <div className={styles.discriptions}>
          <p>{data.title}</p>
        </div>
        <h1>{data.descriptions}</h1>
      </div>
    </section>
  );
};
