import { useState } from "react";
import styles from './BurgerMenu.module.scss';
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <div className={styles.burgerMenu}>
            <div
                className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link onClick={scrollToTop} to={'/'}>Главная</Link></li>
                    <li><Link onClick={scrollToTop} to={'/aboutProject'}>О проекте</Link></li>
                    <li><Link onClick={scrollToTop} to={'/funds'}>Источники Финансирования</Link></li>
                    <li><Link onClick={scrollToTop} to={'/projects'}>Бизнес проекты</Link></li>
                    <li><Link onClick={scrollToTop} to={'/exhibition'}>Выставка</Link></li>
                </ul>
            </nav>
        </div>
    );
}

