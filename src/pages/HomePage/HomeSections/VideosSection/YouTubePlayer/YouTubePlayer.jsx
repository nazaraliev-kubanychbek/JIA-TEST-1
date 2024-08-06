import { useState } from "react";
import styles from './YouTubePlayer.module.scss';
import { useMediaQuery } from "@hooks/usemedia/useMedia";

const YouTubePlayer = ({videoId}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [iframe, setIframe] = useState(videoId);

    const onPlayButtonClick = () => {
        setIsPlaying(!isPlaying);
        setIframe(`${videoId}&autoplay=1`);
    };
    const w = useMediaQuery();
    const svgSize = w < 700 ? '100' : '132'; 
    return (
        <div className={styles.youtube_container}>
            {!isPlaying && (
                <div onClick={onPlayButtonClick} className={styles.play_button}>
                <svg width={svgSize} height={svgSize} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96.3301 50C96.3301 77.0945 75.1125 99 49.0107 99C22.9089 99 1.69141 77.0945 1.69141 50C1.69141 22.9055 22.9089 1 49.0107 1C75.1125 1 96.3301 22.9055 96.3301 50Z" fill="#064CA1" stroke="#064CA1" strokeWidth="2"/>
                    <path d="M37.5875 27.9466L74.5011 50L37.5875 72.0534V27.9466Z" fill="#D9D9D9" stroke="#064CA1" strokeWidth="2"/>
                </svg>
                </div>
            )}
            <iframe
                onClick={onPlayButtonClick}
                id={`youtube-iframe-${videoId}`}
                className={`${styles.youtube_iframe} ${isPlaying ? styles.is_playing : ''}`}
                width="640"
                height="390"
                src={`${iframe}`}
                title="youtubeVideo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default YouTubePlayer;
