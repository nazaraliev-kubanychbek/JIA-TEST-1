import { useEffect, useState } from 'react';
import styles from './NavigationTop.module.scss';
import arrow from '@img/arrow.svg';

export const NavigationTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        window.addEventListener('scroll', updateScrollPosition);

        updateScrollPosition();

        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    return (
        <div className='container'>
            {scrollPosition.y > 870 && (
                <>
                    <aside onClick={scrollToTop} className={styles.navigation}>
                        <img src={arrow} alt="navigation" />
                    </aside>
                    <div className={styles.wave_container}>
                        <div className={styles.round}></div>
                        <div className={styles.round}></div>
                        <div className={styles.round}></div>
                    </div>
                </>
            )}
        </div>
    );
};