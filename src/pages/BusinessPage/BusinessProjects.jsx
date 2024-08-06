import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import pdfICon from './img/pdfIcon.svg';

const BusinessProjects = () => {
  const [projectList, setProjectList] = useState([]);
  const lang = useSelector((s) => s.reducer.lang);

  useEffect(() => {
    axios(`https://bif.webtm.ru/${lang}/api/v1/project/yearly-catalogs/`).then(
      ({ data }) => setProjectList(data)
    );
  }, [lang]);
  return (
    <div className="container">
      <div className="businessPage-projects">
        <div className="row businessPage-projects-row">
          {projectList.map((item) => {
            return (
                <div key={item.id} className="businessPage-projects-card">
                 <a href={item.image} target="_blank">
                 <img
                    src={pdfICon}
                    alt=""
                    className="businessPage-projects-card-img"
                  />
                 </a>
                  <p className="businessPage-projects-card-text">{item.year}</p>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessProjects;
