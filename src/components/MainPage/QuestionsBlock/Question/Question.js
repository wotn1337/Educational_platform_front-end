import React from "react";
import s from "./Question.module.css";
import rainbow from '../../../../assets/img/mainPage/rainbow.png'

const Question = (props) => {
    return (
        <div className={s.questionBlock}>
            <div className={s.questionWrapper}>
                <img className={s.image} src={rainbow} alt="rainbow"/>
                <p className={s.question}>{props.question}</p>
            </div>
            <p className={s.answer}>{props.answer}</p>
        </div>
    );
}

export default Question;