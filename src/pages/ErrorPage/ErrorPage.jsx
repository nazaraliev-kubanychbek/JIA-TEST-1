import React from 'react';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import error from './img/404.svg';

export const ErrorPage = () => {
    return (
        <section className={styles.container}>
            <img src={error} alt="error" />

            <Link to={'/'}><button className={styles.button}>На главную</button></Link>
        </section>
    );
}
