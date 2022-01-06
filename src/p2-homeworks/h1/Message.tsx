import React from 'react'
import './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className="profile">
                <div className="profileAvatar">
                <img src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg" alt=""></img>
                </div>
                <div className="profile__message-box">
                    <div className="profile__name">{props.name}</div>
                    <div className="profile__box">
                    <div className="profile__message">{props.message}</div>
                    <div className="profile__time">{props.time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
