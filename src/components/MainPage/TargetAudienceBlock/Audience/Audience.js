import React from "react";
import  s from './Audience.module.css'

const Audience = (props) => {
    return (
        <div className={s.audience}>
            <img className={s.image} src={props.image} alt="audience"/>
            <p className={s.title}>{props.title}</p>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}


export default Audience;