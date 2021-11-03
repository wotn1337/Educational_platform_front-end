import React from 'react';
import s from './AnswerBlocks.module.css'
import AnswerContainer from "./Answer/AnswerContainer";

const SingleAnswerBlock = (props) => {
    const answers = props.answers.map(answer => {
        return <AnswerContainer type={'radio'}
                                questionId={props.id}
                                answer={answer}
                                changeAnswer={props.changeAnswer}/>
    })

    return (
        <div>
            {answers}
            <input type="radio"/>
            <button className={s.addButton}
                    onClick={event => {
                        event.preventDefault();
                        props.addAnswer(props.id)
                    }}>
                Добавить вариант
            </button>
        </div>
    )
}

export default SingleAnswerBlock;