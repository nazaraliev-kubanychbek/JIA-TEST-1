import React from 'react';
import styles from './ModalSendForm.module.scss';


export const ModalSendForm = ({ openModal, setOpenModal }) => {
    if(!openModal)  {
        return null;
    } 

    return(
        <div onClick={() => setOpenModal(!openModal)} className={styles.open}>
            <div onClick={event => event.stopPropagation()} className={styles.block}>
                
                <a onClick={() => setOpenModal(!openModal)} target='_blank' href="https://forms.gle/vjjuBUWVSicnusxK6" rel="noreferrer">
                    <p className={styles.firstLink}>
                        <span>Кырг:</span>
                        Бизнес долбооруңузду сунуштаңыз жана инвестиция алыңыз!
                    </p>
                </a>
                <a onClick={() => setOpenModal(!openModal)} target='_blank' href="https://forms.gle/KmxKTQ91qZ9zJrqT8" rel="noreferrer">
                    <p className={styles.secondLink}>
                        <span>Русс:</span>
                        Презентуйте свой бизнес-проект и получите инвестиции!
                    </p>
                </a>
            </div>
        </div>
    );
}