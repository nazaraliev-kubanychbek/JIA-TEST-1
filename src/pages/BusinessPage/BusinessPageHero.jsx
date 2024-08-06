import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import borderLeftIcon from './img/border-left.svg';
import borderRightIcon from './img/border-right.svg';

const BusinessPageHero = () => {
  const [text, setText] = useState({});
  const lang = useSelector((s) => s.reducer.lang);
  const navigate = useNavigate();
  useEffect(() => {
    axios(`https://bif.webtm.ru/${lang}/api/v1/project/projects/`).then(
      ({ data }) => setText(data[0])
    );
  }, [lang]);
  return (
    <div className="businessPage-hero">
      <div className="container">
        <div className="businessPage-hero-wrapper">
          <img src={borderLeftIcon} alt="" className="businessPage-hero-wrapper-borderLeft" />
        <h1 className="businessPage-hero-title">{text.title}</h1>
        <p className="businessPage-hero-text"  dangerouslySetInnerHTML= {{__html:text.descriptons}}></p>
        <button
          className="businessPage-btn"
          onClick={() => {
            navigate("/funds");
          }}
        >
          {
            lang === 'ru'
            ? 'Связаться'
            : lang === 'en'
            ? 'Contact'
            : 'Байланышуу'
          }
        </button>
        <img src={borderRightIcon} alt="" className="businessPage-hero-wrapper-borderRight" />
        </div>

      </div>
    </div>
  );
};

export default BusinessPageHero;
