import React from 'react'
import style from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={style.profile}>
                <div className={style.profileAvatar}>
                <img src={props.avatar} alt=""></img>
                </div>
                <div className={style.profileMessageBox}>
                    <div className={style.profileName}>{props.name}</div>
                    <div className={style.profileBox}>
                    <div className={style.profileMessage}>{props.message}</div>
                    <div className={style.profileTime}>{props.time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
