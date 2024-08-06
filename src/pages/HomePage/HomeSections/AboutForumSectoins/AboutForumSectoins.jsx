import { useEffect, useRef, useState} from 'react';
import styles from './AboutForumSectoins.module.scss';
import { ModalSendForm } from '@components/index';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const AboutForumSectoins = () => {
    const lang = useSelector(s => s.reducer.lang);
    const [text, setText] = useState({});
    const [statistic, setStatistic] = useState([]);
    const [buttonText, setButtonText] = useState({});
    const observerRef = useRef(null);

    const [ currVal1, setCurrVal1 ] = useState(0);
    const [ currVal2, setCurrVal2 ] = useState(90);
    const [ currVal3, setCurrVal3 ] = useState(0);

    const [openModal, setOpenModal] = useState(false);

    const val1 = 20;
    const time = 78;
    const time3 = 35;
    const val2 = 198;
    const time1 = 13;
    const val3 = 44;

    useEffect(() => {
        const currentRef = observerRef.current;

        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                    currVal1 !== val1 && setTimeout(setCurrVal1, time, currVal1 + 1);
                    currVal2 !== val2 && setTimeout(setCurrVal2, time1, currVal2 + 1);
                    currVal3 !== val3 && setTimeout(setCurrVal3, time3, currVal3 + 1);
            }
          },
          {
            threshold: 0.9,
          }
        );

    if (observerRef.current) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    }, [ currVal1, currVal2, currVal3, observerRef ]);

   useEffect(()=>{
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/about_the_forum/`)
    .then(({data}) => setText(data[0]));
    axios( `https://bif.webtm.ru/${lang}/api/v1/about/statistics/`)
    .then(({data})=> setStatistic(data));
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/button/`)
    .then(({data})=> setButtonText(data[0]));
   }, [lang])
    return (
        <section className='container'>
            <div className={styles.container}>
              <h2>{text.title}</h2>
              <p>
                  {text.descriptions}
              </p>

              <div ref={observerRef} className={styles.flexItems}>
                {
                  statistic.map(item =>{
                    return <div key={item.id} className={styles.item}>
                    <h3>{item.title}</h3>
                    <p>{item.descriptions}</p>
                </div>
                  })
                }

              </div>

              {/* <a target='_blank' href="https://forms.gle/KmxKTQ91qZ9zJrqT8" rel="noreferrer"> */}
                <button onClick={() => setOpenModal(!openModal)} className={styles.button}>{buttonText.title}</button>
              {/* </a> */}
            </div>
            <ModalSendForm openModal={openModal} setOpenModal={setOpenModal} />
        </section>
    );
}
