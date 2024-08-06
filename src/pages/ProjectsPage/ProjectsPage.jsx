// import { FirstSection } from "@components/ProjectsSections";
// import bannerImage from "../../img/projectsBanner.png";
import ReactPlayer from "react-player";
import classes from "./ProjectsPage.module.scss";
import ages1 from "../../img/projects-ages/2015.svg";
import ages2 from "../../img/projects-ages/2016.svg";
import ages3 from "../../img/projects-ages/2017.svg";
import ages4 from "../../img/projects-ages/2019.svg";
import ages5 from "../../img/projects-ages/2022.svg";
import projectVideoBorder from "@img/projectsVideoBorder.png";
import projectVideoBorderRight from "@img/projectsVideoBorderRight.png";
import vector_left from "../../img/vector-left.svg";
import vector_right from "../../img/vector-right.svg";
import investPrice from "../../img/investPrice.svg";
import investDiagram from "../../img/investDiagram.svg";
import "./projectsPage.scss";
// import ProjectsPageHero from "./ProjectsPageHero";
// import ProjectsPageProjects from "./ProjectsPageProjects";
// import ProjectsPageInfo from "./ProjectsPageInfo";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper.css";
import image1 from "../../img/sliderImage.png";
import image2 from "../../img/header/emblem.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SwiperSection } from "@pages/HomePage/HomeSections";

const getDinamicData = async (url) => {
  const data = (await fetch(url)).json();
  console.log(data);
  return data;
};
export const ProjectsPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const lang = useSelector(s => s.reducer.lang);
  useEffect(() => {
    (async () => {
      try {
        const result = {};
        const data1 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/about/`
        );
        const data2 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/about_banner/`
        );

        const data4 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/history/`
        );
        const data5 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/history_detail/`
        );
        const data6 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/statistics/`
        );
        const data7 = await getDinamicData(
          `https://bif.webtm.ru/${lang}/api/v1/about/gallery/`
        );
        console.log("data1", data1);
        result.about = {
          title: data1[0].title,
          desc: data1[0].descriptions,
        };
        result.banner = {
          title: data2[0].title,
          desc: data2[0].descriptions,
        };
        result.history_lines = data5;
        result.history = data4;
        result.statistics = data6;
        result.images = data7;
        setData(result);
        setLoading(false);
      } catch {
        alert("Данные не загрузились !");
      }
    })();
  }, [lang]);
  return (
    <div
      style={{ width: "100%", minHeight:'100vh', backgroundColor: "#051650" }}
      className="projects_page"
    >
      {!loading ? (
        <>
          <div className={classes.projects_banner_wrap}>
            <section className={classes.projects_banner + " container"}>
              <div className={classes.projects_banner_content}>
                <h1 className={classes.banner_title}>{data.banner.title}</h1>



                <div className={classes.projects_banner_advantages}>
                  {/* <div className={classes.projects_banner_advantages_block}> */}
                  {data.statistics.map((item) => {
                    return (
                      <div className={classes.projects_banner_advantages_block}>
                        <div className={classes.content}>
                          <h3 className={classes.projects_banner_title}>
                            {item.title}
                          </h3>
                          <p className={classes.projects_banner_desc}>
                            {item.descriptions}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {/* </div> */}
                </div>
              </div>
            </section>
          </div>

          <section className={classes.about_projects + " container "}>
            <h1 className={"title " + classes.about_project_title}>
              {data.about.title}
            </h1>

            <div className={classes.about_content}>
              <p className={classes.about_text_content} dangerouslySetInnerHTML= {{__html:data.about.desc}}>

                {/* Бишкекский Инвестиционный Форум - эта площадка, где встречаются МСБ
            с крупным бизнесом, внутренними и зарубежными инвесторами,
            представителями парламентариев и государственных структур,
            международных и местных организаций, посольств и бизнес сообщества.
            В рамках форума презентуются самые успешные и перспективные бизнес
            проекты, обсуждение ожидаемых трендов и изменения в экономике и
            бизнес среде и новые векторы сотрудничества для предпринимателей.
            <br />
            <br />
            BIF это уникальная возможность для презентации самых лучших бизнес
            проектов, поиска динамично растущего бизнеса для инвестиций и
            потенциальных инвесторов/бизнес партнеров для заключения реальных
            контрактов и соглашений.
            <br />
            <br />
            За прошедшие годы BIF продемонстрировал высокий спрос на платформу,
            где предприниматели могут встретиться напрямую с инвесторами и
            потенциальными партнерами в своей сфере деятельности. По результатам
            предыдущих лет, а именно с 2015 по 2022 были заключены успешные
            сделки на сумму более чем 20 $ млн.  */}
              </p>
            </div>
          </section>

          <section className={classes.history + " container"}>
            <h1 className={classes.history_title + " title"}>
              <img src={vector_right} alt="" />
              {data.history[0].title}
              <img src={vector_left} alt="" />
            </h1>
            <p className={classes.history_text}>
            {data.history[0].descriptions}
            </p>
            <div className={classes.history_ages}>
              <p>{data.history[0].year_1}</p>
              <p>{data.history[0].year_2}</p>
              <p>{
            data.history[0].year_3
          }</p>
          <p>{
            data.history[0].year_4
          }</p>
             <p>{
            data.history[0].year_5
          }</p>
              {/* <img src={ages1} alt="" />
          <img src={ages2} alt="" />
          <img src={ages3} alt="" />
          <img src={ages4} alt="" />
          <img src={ages5} alt="" /> */}
            </div>
          </section>

          <section className={classes.history_lines + " container"}>
            {
              data.history_lines.map((item,index)=>{
                const age = item.title.slice(0,4)
                const title_content = item.title.slice(4,item.title.length)
                console.log(title_content,'cont');
                console.log(age,'age');
                if(index%2==0){
                  return(<div className={classes.history_lines_block}>
                    <h1 className={classes.history_lines_title}>
                      <span>{age}</span> {title_content}
                    </h1>
                    <div className={classes.history_lines_block_content}>
                      <p dangerouslySetInnerHTML={{__html:item.descriptions}}>

                      </p>
                      <div className={classes.history_lines_video}>
                        <div className={classes.history_lines_video_block}>
                        <ReactPlayer
                      width={'100%'}
                      height={'100%'}
                      position={'relative'}
                      zIndex={'2'}
                                    url={item.url} controls={true} alt=""/>
                        </div>

                        {/* <iframe
                          width="560"
                          height="315"
                          src={item.url}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe> */}
                        <img
                          className={classes.history_lines_video_border}
                          alt="history_lines_video_border"
                          src={projectVideoBorder}
                        />
                      </div>
                    </div>
                    <div className={classes.history_lines_footer}>
                      <div className={classes.history_lines_footer_item}>
                        <img src={investPrice} alt="" /> {item.amount_projet}
                      </div>
                      <div className={classes.history_lines_footer_item}>
                        <img src={investDiagram} alt="" /> {item.amount_invest}
                      </div>
                    </div>
                  </div>)
                }
                return (
                  <div className={classes.history_lines_block}>
                  <h1
                    className={classes.history_lines_title}
                    style={{ textAlign: "end" }}
                  >
                    <span>{age}</span> {title_content}
                  </h1>
                  <div className={classes.history_lines_block_content}>
                    <div className={classes.history_lines_video}>
                    <div className={classes.history_lines_video_block}>
                        <ReactPlayer
                      width={'100%'}
                      height={'100%'}
                      position={'relative'}
                      zIndex={'2'}
                                    url={item.url} controls={true} alt=""/>
                        </div>
                      {/* <iframe
                        width="560"
                        height="315"
                        src={item.url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe> */}
                      <img
                        className={classes.history_lines_video_border}
                        alt="history_lines_video_border"
                        src={projectVideoBorderRight}
                        style={{ left: "24px" }}
                      />
                    </div>
                    <p dangerouslySetInnerHTML={{__html:item.descriptions}}>

                    </p>
                  </div>
                  <div className={classes.history_lines_footer}>
                    <div className={classes.history_lines_footer_item}>
                      <img src={investPrice} alt="investPrice" /> {item.amount_invest}
                    </div>
                    <div className={classes.history_lines_footer_item}>
                      <img src={investDiagram} alt="investDiagram" /> {item.amount_projet}
                    </div>
                  </div>
                </div>
                )

              })
            }



       </section>
       <SwiperSection />
          {/* <h1 className={classes.projects_photo_title + ' title'} style={{ textAlign: "center", marginTop: 150 }}>
            фотографии
          </h1>
          <div className={classes.swiper_projects_wrap}>
            <div
              className={
                classes.slider_projects + " container swiper_projects_container"
              }
            >


              <Swiper slidesPerView={
                window.screen.width > 1200
                ? 2.5
                : 2
              }>
              {
                data.images.map((item)=>{
                  console.log(item)
                  return(
                  <SwiperSlide>
                  <img src={item.image} />
                </SwiperSlide>);
                })
              }
              </Swiper>
            </div>
          </div> */}
        </>
      ) : (
        ""
      )}
    </div>
  );
};
