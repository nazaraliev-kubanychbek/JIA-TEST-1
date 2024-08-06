import styles from './DescriptionSection.module.scss';
import background from '@img/BIF2016.webp';

export const DescriptionSection = ({text}) => {
    return (
        <div className={styles.con}>
            <img src={background} alt="backgroundBIF" />
            <h2>{text}</h2>
            <div className={styles.shadows}></div>
        </div>  
    );
}
