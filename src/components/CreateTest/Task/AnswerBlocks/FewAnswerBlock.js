import React from 'react';
import s from './AnswerBlocks.module.css'
import AnswerContainer from "./Answer/AnswerContainer";

const FewAnswerBlock = (props) => {
    const answers = props.answers.map(answer => {
        return <AnswerContainer type={'checkbox'}
                                questionId={props.id}
                                answer={answer}
                                changeAnswer={props.changeAnswer}/>
    })
    return (
        <div>
            {answers}
            <input type="checkbox"/>
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

export default FewAnswerBlock;