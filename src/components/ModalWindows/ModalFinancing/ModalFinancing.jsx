import { useState,useEffect } from 'react';
import styles from './ModalFinancing.module.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const ModalFinancing = ({setOpenModalForm ,openModal, setOpenModal, item}) => {
    console.log(item);
    const lang = useSelector(s =>s.reducer.lang)
    const [data,setData] = useState({})
    console.log(data);

    useEffect(()=>{
        (async()=>{
          const res =await fetch(`https://bif.webtm.ru/${lang}/api/v1/financing/nameinfo/${item.id}/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          })
        //   const res2 =await  fetch(`https://bif.webtm.ru/ru/api/v1/financing/imageform/${item.id}/`)
          const data_res =await res.json()
        //   const data_res2 =await res2.json()
        //   console.log(data_res2);
          console.log(data_res);

          setData({...data,...data_res})
        })()
    },[lang])
    // const {img, title, description, typeFinancing} = item;
    const [openDescription, setOpenDescription] = useState(false);


    if(!openModal){
        return <></>;
    }
    return (
        <div onClick={() => {setOpenModal(false); setOpenDescription(false)}} className={styles.open}>

             <div className={styles.open_wrap}>

                <div onClick={event => event.stopPropagation()} className={styles.descriptionBlock}>
                    <div className={styles.img}>
                        <img src={data.name_infos?data.image:''} alt="logo" />
                    </div>
                    <div className={styles.text}>
                        <h2>{data.name_infos?data.name_infos[0].title:''}</h2>
                        <p>{data.name_infos?data.name_infos[0].descriptions:''}</p>

                        <h2>{data.name_infos?data.name_infos[1].title:''}</h2>
                        <p>{data.name_infos?data.name_infos[1].descriptions:''}</p>

                        <h2>{data.name_infos?data.name_infos[2].title:''}</h2>
                        <p>{data.name_infos?data.name_infos[2].descriptions:''}</p>
                    </div>
                </div>

        <div className={styles.button}>
            <button onClick={() => setOpenModalForm(true)} className={styles.callButton}>Связаться</button>
        </div>
    </div>
    </div>

        // <div onClick={() => {setOpenModal(false); setOpenDescription(false)}} className={styles.open}>
        //     {
        //         !openDescription ? (
        //             <div style={openDescription ? {visibility: 'hidden'} : {visibility: 'visible'}} onClick={event => event.stopPropagation()} className={styles.block}>
        //                 <div className={styles.shortName}>
        //                     <p className={styles.firstLink}>{title}</p>
        //                 </div>

        //                 <p onClick={() => setOpenDescription(true)} className={styles.link}>Подробнее</p>
        //             </div>
        //         ) : (
        //             <div onClick={event => event.stopPropagation()} className={styles.descriptionBlock}>
        //                 <div className={styles.img}>
        //                     <img src={img} alt="logo" />
        //                 </div>
        //                 <div className={styles.text}>
        //                     <h2>Название</h2>
        //                     <p>{title}</p>

        //                     <h2>Описание</h2>
        //                     <p>{description}</p>

        //                     <h2>Виды финансирования</h2>
        //                     <p>{typeFinancing}</p>
        //                 </div>
        //             </div>
        //         )
        //     }

        //     <div className={styles.button}>
        //         <button onClick={() => setOpenModalForm(true)} className={styles.callButton}>Связаться</button>
        //     </div>
        // </div>
    );

}
