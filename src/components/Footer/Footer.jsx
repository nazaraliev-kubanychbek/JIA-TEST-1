import "./footer.scss";
import iconBif from "./icons/bifIcon.svg";
import bifLogo from './icons/bif_logo_SVG 1.svg';
import email from "@img/footer/email.svg";
import phone from "@img/footer/phone.svg";
import whatsapp from "@img/footer/logos_whatsapp-icon.svg";
import telegram from "@img/footer/logos_telegram.svg";
import facebook from "@img/footer/logo_faceBook.svg";
import insta from "@img/footer/logo_insta.svg";
import geeksProLogo from './icons/geeksProLogo.svg';
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { useSelector } from "react-redux";

const linkText = {
  main: {
    ru: "Главная",
    en: "Home",
    ky: "Башкы бет",
  },
  projects: {
    ru: "О проекте",
    en: "About project",
    ky: "Долбоор жөнүндө",
  },
  funds: {
    ru: "Источники финансирования",
    en: "Sources of financing",
    ky: "Каржылоо булактары",
  },
  business: {
    ru: "Бизнес проекты",
    en: "Business projects",
    ky: "Бизнес долбоорлор",
  },
  exhibition: {
    ru: "Выставка",
    en: "Exhibition",
    ky: "Көргөзмө",
  },
  contanct: {
    ru: "связаться с нами",
    en: "connect with us",
    ky: "биз менен байланыш",
  },
  navigation: {
    ru: "Навигация",
    en: "Navigation",
    ky: "Навигация",
  },
  social: {
    ru: "Соц.сети",
    en: "Social media",
    ky: "Соц. тармактар",
  },
};

export const Footer = () => {
  const lang = useSelector((s) => s.reducer.lang);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  };
  const w = useMediaQuery("(max-width: 840px)");
  return (
    <footer className={"footer"}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="footer-bif-logo" src={bifLogo} alt="" />
            <img className="footer-bif-icon" src={iconBif} alt="BIF icon" />
          </div>
          <div className="col-3">
           <div className="footer-contact">
           <a className="footer-contact-title" href="https://www.instagram.com/bif.kg/">
              {linkText.contanct[lang]}
            </a>
            <p>

              <a className="footer-contact-link" href="tel: +996 555 895 362"><img src={phone} alt="phone" /> +996 555 895 362</a>
            </p>
            <a
            className="footer-contact-link"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bif@jia.kg&su=Тема%20письма&body=Текст%20сообщения"
              rel="noreferrer"
            >
              <p>
                <img src={email} alt="email" /> E-mail
              </p>
            </a>
           </div>
          </div>
          <div className="col-3">
            <div className="footer-nav">
            <h3 className="footer-nav-title">{linkText.navigation[lang]}</h3>
            <Link className="footer-nav-link" onClick={scrollToTop} to={"/"}>
              <p>{linkText.main[lang]}</p>
            </Link>
            <Link className="footer-nav-link" onClick={scrollToTop} to={"/projects"}>
              <p>{linkText.projects[lang]}</p>
            </Link>
            <Link className="footer-nav-link" onClick={scrollToTop} to={"/funds"}>
              <p>{linkText.funds[lang]}</p>
            </Link>
            <Link className="footer-nav-link" onClick={scrollToTop} to={"/business"}>
              <p>{linkText.business[lang]}</p>
            </Link>
            <Link className="footer-nav-link" onClick={scrollToTop} to={"/exhibition"}>
              <p>{linkText.exhibition[lang]}</p>
            </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-social">
            <h3 className="footer-social-title">{linkText.social[lang]}</h3>
            <div className="footer-social-links">
              <a
                target="_balnk"
                href="https://api.whatsapp.com/send?%20phone=996555895362"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a
                target="_balnk"
                href="https://www.facebook.com/bishkekinvestmentforum?mibextid=LQQJ4d "
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a target="_balnk" href="https://www.instagram.com/bif_kg_/ ">
                <img src={insta} alt="instagram" />
              </a>
              <a target="_balnk" href="https://t.me/bishkekinvestforum">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>
        <img src={geeksProLogo} alt="" className="footer-geeks-logo" />
      </div>
    </footer>
  );
};

{
  /* <div className={styles.container}>
<div className={styles.emblem}>
    <img src={emblem} alt="emblem" />
    {
        !w &&
        <div className={styles.geeks}>
            <img src={geeks} alt="geeks" />
            <p>Made by Geeks Pro</p>
        </div>
    }

</div>

<div className={styles.contact}>
    <a href="https://www.instagram.com/bif.kg/">{linkText.contanct[lang]}</a>
    <p><img src={phone} alt="phone" />+996 555 895 362</p>
    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=bif@jia.kg&su=Тема%20письма&body=Текст%20сообщения" rel="noreferrer"><p><img src={email} alt="email" /> E-mail</p></a>
</div>

<div className={styles.navigation}>
    <h3>{linkText.navigation[lang]}</h3>
    <Link onClick={scrollToTop} to={'/'}><p>{linkText.main[lang]}</p></Link>
    <Link onClick={scrollToTop} to={'/projects'}><p>{linkText.projects[lang]}</p></Link>
    <Link onClick={scrollToTop} to={'/funds'}><p>{linkText.funds[lang]}</p></Link>
    <Link onClick={scrollToTop} to={'/business'}><p>{linkText.business[lang]}</p></Link>
    <Link onClick={scrollToTop} to={'/exhibition'}><p>{linkText.exhibition[lang]}</p></Link>
</div>

<div className={styles.social_media}>
    <h3>{linkText.social[lang]}</h3>
    <div>
        <a target='_balnk' href="https://api.whatsapp.com/send?%20phone=996555895362">
            <img src={whatsapp} alt="whatsapp" />
        </a>
        <a target='_balnk' href="https://www.facebook.com/bishkekinvestmentforum?mibextid=LQQJ4d ">
            <img src={facebook} alt="facebook" />
        </a>
        <a target='_balnk' href="https://www.instagram.com/bif_kg_/ ">
            <img src={insta} alt="instagram" />
        </a>
        <a target='_balnk' href="https://t.me/bishkekinvestforum"><img src={telegram} alt="telegram" /></a>
    </div>
</div>

{
    w &&
    <div className={styles.geeks}>
        <img src={geeks} alt="geeks" />
        <p>Made by Geeks Pro</p>
    </div>
}
</div> */
}
