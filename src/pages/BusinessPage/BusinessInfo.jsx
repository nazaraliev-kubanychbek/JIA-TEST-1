import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const BusinessInfo = () => {
  const [text, setText] = useState({});
  const [cards, setCards] = useState([]);
  const lang = useSelector(s=> s.reducer.lang);

  const findTel = (text = "") => {
    if (!text.includes("+")) return { title: text };
    const idx = text.lastIndexOf("+");
    const title = text.substr(0, idx);
    const tel = text.substr(idx);
    return {
      title,
      tel,
    };
  };

  useEffect(() => {
    axios(`https://bif.webtm.ru/${lang}/api/v1/project/business-projects/`).then(
      ({ data }) => setText(data[0])
    );

    axios(`https://bif.webtm.ru/${lang}/api/v1/project/scrolls/`).then(({ data }) =>
      setCards(data)
    );
  }, [lang]);
  return (
    <div className="businessPage-info">
      <h2 className="businessPage-info-title">{text.title}</h2>
      <p className="businessPage-info-text">{text.descriptons}</p>

      <div className="row">
        {cards.map((item) => (
          <div className="col-4" key={item.id}>
            <div className="businessPage-info-card">
              <img
                src={item.image}
                alt=""
                className="businessPage-info-card-icon"
              />
              <p className="businessPage-info-card-text">
                {findTel(item.title).title}
                {findTel(item.title).tel ? (
                <>
                  <br />
                  <a href={`tel: ${findTel(item.title).tel}`}>{findTel(item.title).tel}</a>
                </>
              ) : (
                ""
              )}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BusinessInfo;
