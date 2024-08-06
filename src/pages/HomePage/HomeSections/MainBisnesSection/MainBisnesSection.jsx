import styles from "./MainBisnesSection.module.scss";
import firstMan from "@img/homepageImg/Component3.png";
import secondMan from "@img/homepageImg/Rectangle4383.jpg";
import thirdMan from "@img/homepageImg/Rectangle4384.jpg";
import fourthMan from "@img/homepageImg/Rectangle4385.jpg";
import presentImage1 from "@img/present1.png";
import presentLeftBorder from "@img/presentLeftBorder.svg";
import presentRightBorder from "@img/presentRightBorder.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const MainBisnesSection = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState({})
  const lang = useSelector((s) => s.reducer.lang);

  useEffect(() => {
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/what_will/`).then(
      ({ data }) => setList(data)
    );
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/what_will_title/`)
    .then(({data})=> setText(data[0]));
  }, [lang]);
  return (
    <section className="container">
      <div className={styles.container}>
        <h2>{text.title}</h2>

        {/*
                <div className={styles.flexItem}>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={firstMan} alt="" />
                        </div>
                        <p>Выставка</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={secondMan} alt="" />
                        </div>

                        <p>Презентации инвест-проектов</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={thirdMan} alt="" />
                        </div>

                        <p>Мастер-классы</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={fourthMan} alt="" />
                        </div>
                        <p>Панельные сессии</p>
                    </div>
                </div> */}

        <div className={styles.presents}>
          <img
            alt=""
            className={styles.present_left_border}
            src={presentLeftBorder}
          />
          <img
            alt=""
            className={styles.present_right_border}
            src={presentRightBorder}
          />
          {
          list.map((item) => {
            return (
              <div key={item.id} className={styles.present}>
                <img src={item.image} alt="" />
                <p className={styles.present_desc}>{item.title}</p>
              </div>
            );
          })
          }
        </div>
      </div>
    </section>
  );
};
