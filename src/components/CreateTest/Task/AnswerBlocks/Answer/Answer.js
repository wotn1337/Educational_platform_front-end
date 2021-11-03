import React from 'react';
import s from './../AnswerBlocks.module.css'

const Answer = (props) => {
    return (
        <div className={s.answerWrapper}>
            <div>
                <input type={props.type}
                       id={props.answer.id}
                       name="answer"
                       onChange={() => {
                           props.toggleSelectedMode(props.questionId, props.answer.id)
                       }}
                />
                {!props.answer.isEdit ?
                    <label htmlFor="answer"
                           className={s.answer}
                           onClick={() => {
                               props.toggleEditMode(props.questionId, props.answer.id)
                           }}>
                        {props.answer.content}
                    </label> :

                    <input type="text" id={props.answer.id}
                           name="answer"
                           value={props.answer.content}
                           className={s.inputField}
                           onChange={event => {
                               let content = event.target.value;
                               props.changeAnswer(props.questionId, props.answer.id, content)
                           }}
                           onBlur={() => props.toggleEditMode(props.questionId, props.answer.id)}/>
                }
            </div>

            <button className={s.deleteButton}
                    onClick={() => {
                        props.deleteAnswer(props.questionId, props.answer.id)
                    }}/>
        </div>
    )
}

export default Answer;