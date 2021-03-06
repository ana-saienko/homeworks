import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairBox}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.affairPriority}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.affairButton}>X</button>
        </div>
    )
}

export default Affair
