import "./header.scss";
import { Link } from "react-router-dom";
import bifIcon from "./icons/bifIcon.svg";
import greenEconimyIcon from "./icons/greenEconomyIcon.svg";
import arrow from "../../img/header/Icons.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { BurgerMenu } from "..";
import { setLang } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import burgerIcon from './icons/burger-icon.svg';

const languages = [
  {
    id: 1,
    value: "ru",
    text: "Рус",
  },
  {
    id: 2,
    value: "en",
    text: "Eng",
  },
  {
    id: 3,
    value: "ky",
    text: "Кыр",
  },
];

const linkText = {
  main:{
    ru: 'Главная',
    en: 'Home',
    ky: 'Башкы бет',
  },
  projects:{
    ru: 'О проекте',
    en: 'About project',
    ky: 'Долбоор жөнүндө',
  },
  funds:{
    ru: 'Источники финансирования',
    en: 'Sources of financing',
    ky: 'Каржылоо булактары',
  },
  business:{
    ru: 'Бизнес проекты',
    en: 'Business projects',
    ky: 'Бизнес долбоорлор',
  },
  exhibition:{
    ru: 'Выставка',
    en: 'Exhibition',
    ky: 'Көргөзмө',
  },
}


export const Header = () => {
  const [showLangList, setShowLangList] = useState(false);
  const [selectedLang, setSeletedLang] = useState(languages[0]);
  const dispatch = useDispatch();
  const lang = useSelector(s => s.reducer.lang);
  const [showBurger, setShowBurger] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showLang = () => {
    setShowLangList(!showLangList);
  };



  const w = useMediaQuery("(min-width: 1024px)");
  useEffect(()=>{
    dispatch(setLang(selectedLang.value))
  }, [selectedLang, dispatch])
  return (
    <header>
      <div className={"header-top"}>
        <div className="container">
          <div className="header-top-container">
            <div className="header-top-img">
              <img  className="header-top-img-img1" src={bifIcon} alt="" />
            </div>
            <div className="header-top-img">
              <img className="header-top-img-img2" src={greenEconimyIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container header-container">
          <div className="header-menu">
            <div className="burger-btn" onClick={()=>{
              setShowBurger(!showBurger)
            }}>
                <img src={burgerIcon} alt="" />
            </div>
          <div className={
            showBurger
            ? "header-nav header-nav-show"
            : "header-nav"
          }>
            <Link onClick={()=>{
              scrollToTop();
              setShowBurger(false)
            }} to={"/"}>
              {linkText.main[lang]}
            </Link>
            <Link  onClick={()=>{
              scrollToTop();
              setShowBurger(false)
            }} to={"/projects"}>
             {linkText.projects[lang]}
            </Link>
            <Link onClick={()=>{
              scrollToTop();
              setShowBurger(false)
            }} to={"/funds"}>
              {linkText.funds[lang]}
            </Link>
            <Link  onClick={()=>{
              scrollToTop();
              setShowBurger(false)
            }} to={"/business"}>
              {linkText.business[lang]}
            </Link>
            <Link  onClick={()=>{
              scrollToTop();
              setShowBurger(false)
            }} to={"/exhibition"}>
              {linkText.exhibition[lang]}
            </Link>
          </div>
          </div>

          <div className="header-lang" onClick={showLang}>
            <div className="header-lang-text">{selectedLang.text}</div>
            <img src={arrow} alt="" className="header-lang-icon" />
            <div className={
              showLangList
              ? 'header-lang-list header-lang-list-show'
              : 'header-lang-list'
            }>
              {
                languages.filter(item => item.id !== selectedLang.id).map(item =>{
                  return <p key={item.id} className="header-lang-text" onClick={()=>{
                    setSeletedLang(item)
                  }}>{item.text}</p>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <div className="container">
<div className={styles.header}>
    <div className={styles.links}>
      {!w ? (
        <BurgerMenu />
      ) : (
        <>
          <Link onClick={scrollToTop} to={'/'}>
          Главная
          </Link>
          <Link onClick={scrollToTop} to={'/projects'}>О проекте</Link>
          <Link onClick={scrollToTop} to={'/funds'}>Источники финансирования</Link>
          <Link onClick={scrollToTop} to={'/business'}>Бизнес проекты</Link>
          <Link onClick={scrollToTop} to={'/exhibition'}>Выставка</Link>
        </>
      )}
    </div>

    <div onClick={showLang} style={show ? { position: 'absolute', right: '30px', borderRadius: '20px' } : { backgroundColor: 'none' }} className={styles.language}>
      <div className={styles.mainLang}>
        <p>{lang}</p>
        <img style={show ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }} src={arrow} alt="arrow" />
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.hidden}>
              {languages.map((language, index) => (
                language !== lang ? (
                  <p key={index} onClick={() => changeLang(language)}>{language}</p>
                ) : null
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</div> */
}
