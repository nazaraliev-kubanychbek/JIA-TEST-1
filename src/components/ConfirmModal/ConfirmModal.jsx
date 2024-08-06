import React from 'react'
import classes from './ConfirmModal.module.scss'
import checkIcon from '../../img/carbon_checkmark-outline.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ConfirmModal = ({setConfirm}) => {
    const navigate = useNavigate()
  return (
    <div className={classes.confirm_modal} onClick={(e)=>{
        e.stopPropagation()
        setConfirm(false)
    }}>
        <div className={classes.confirm_modal_content}>
           <div className={classes.block}>
           <img src={checkIcon} alt="" />
            <p>
            Ваш запрос получен, с Вами свяжутся!
            </p>
            </div>
            <button className={classes.cta_button} onClick={(e)=>{e.stopPropagation();navigate('/')}}>
            На главную
            </button>
        </div>
    </div>
  )
}

export { ConfirmModal}