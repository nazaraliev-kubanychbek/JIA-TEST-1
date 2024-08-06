import styles from './VideosSection.module.scss';
import YouTubePlayer from './YouTubePlayer/YouTubePlayer';
import border1 from '@img/videoSec1.svg'
import border2 from '@img/videoSec2.svg'
import border3 from '@img/videoSec3.svg'
import border_response1 from '@img/border_response.svg'
import border_response_mobile1 from '@img/border_response_mobile.svg'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReactPlayer from 'react-player';

export const VideosSection = () => {
    const lang = useSelector(s => s.reducer.lang);
    const [videoData, setVideoData] = useState([]);

    useEffect(()=>{
        axios(`https://bif.webtm.ru/${lang}/api/v1/base/video/`)
        .then(({data}) => setVideoData(data));
    }, [lang])
    return (
        <section className={styles.container}>
            <div className={styles.whiteBlock}>
                <div className={'container'+' '+styles.center}style={{position:'relative'}}>
<img src={border1} alt="" className={styles.border1} />
<img src={border2} alt="" className={styles.border2} />
<img src={border3} alt="" className={styles.border3} />
<img src={border_response1} alt="" className={styles.border_response} />
<img src={border_response_mobile1} alt="" className={styles.border_response_mobile} />

{
    videoData.map((item,idx)=>{
        return idx % 2 === 0
        ? <div className={styles.blockVideo}>
        <div className={styles.text}>
            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML= {{__html:item.descriptions}}>

            </p>
        </div>
       <ReactPlayer
       controls={true}
       url={item.url}
    width={
        window.screen.width > 768
        ? '640px'
        : '100%'
    }
       />

        {/* <div className={styles.video}>
            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
        </div> */}
    </div>
    :  <div className={styles.blockVideo}>
    <ReactPlayer
       controls={true}
       url={item.url}
       width={
        window.screen.width > 768
        ? '640px'
        : '100%'
    }
       />
        {/* <div className={styles.video}>
            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
        </div> */}
    <div className={styles.text}>
        <h2>{item.title}</h2>
        <p dangerouslySetInnerHTML= {{__html:item.descriptions}}>
            </p>
    </div>
</div>
    })
}

                </div>
            </div>

        </section>
    );
}
