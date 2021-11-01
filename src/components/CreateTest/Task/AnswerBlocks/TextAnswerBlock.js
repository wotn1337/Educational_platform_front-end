import React from 'react';
import s from './AnswerBlocks.module.css'

const TextAnswerBlock = (props) => {
    return (
        <div>
            <p>Ответ:</p>
            <input className={s.textAnswer} type="text" id="answer" name="answer"/>
        </div>
    )
}

export default TextAnswerBlock;