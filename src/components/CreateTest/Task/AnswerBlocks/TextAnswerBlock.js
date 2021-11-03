import React from 'react';
import s from './AnswerBlocks.module.css'

const TextAnswerBlock = (props) => {
    return (
        <div>
            <p>Ответ:</p>
            <input type="text"
                   className={s.textAnswer}
                   value={props.answer[0].content}
                   onChange={event => {
                       let content = event.target.value
                       props.changeAnswer(props.id, props.answer[0].id, content)
                   }}
                   id="answer"
                   name="answer"/>
        </div>
    )
}
export default TextAnswerBlock;