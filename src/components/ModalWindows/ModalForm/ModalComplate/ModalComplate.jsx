import { Link } from 'react-router-dom';
import styles from './ModalComplate.module.scss';

export const ModalComplate = ({ openModalComplate, setOpenModalComplate }) => {
    if(!openModalComplate)  {
        return null;
    }
    return (
        <div onClick={() => setOpenModalComplate(!openModalComplate)} className={styles.open}>
            <div onClick={event => event.stopPropagation()} className={styles.block}>
                <h2 className={styles.completeText}>
                    Ваш запрос получен, с Вами свяжутся!
                </h2>
            </div>
            <div className={styles.button}>
                <Link to={'/'}><button className={styles.callButton}>На главную</button></Link>
            </div>
        </div>
    );
}
