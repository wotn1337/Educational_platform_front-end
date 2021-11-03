import React from 'react';
import s from './Task.module.css'
import arrow from '../../../assets/img/fragments/down_arrow.svg'
import single from '../../../assets/img/fragments/single.png'
import few from '../../../assets/img/fragments/few.png'
import text from '../../../assets/img/fragments/text.png'
import Option from "./Option/Option";
import SingleAnswerBlock from "./AnswerBlocks/SingleAnswerBlock";
import FewAnswerBlock from "./AnswerBlocks/FewAnswerBlock";
import TextAnswerBlock from "./AnswerBlocks/TextAnswerBlock";

const Task = (props) => {
    return (
        <div className={s.testWrapper}>
            <input type="text"
                   className={s.task}
                   placeholder={'Введите ваш вопрос'}
                   value={props.question.question}
                   onChange={event => {
                       let text = event.target.value;
                       event.preventDefault();
                       props.changeQuestion(props.question.id, text)
                   }}
            />

            <div className={s.dropdown}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button className={s.selector}>{props.question.option}</button>
                    <img src={arrow} alt="arrow" style={{marginRight: '20px'}}/>
                </div>
                <div className={s.dropdownList}>
                    <Option changeOption={props.changeOption} id={props.question.id} text={'Один вариант'} img={single}/>
                    <Option changeOption={props.changeOption} id={props.question.id} text={'Несколько'} img={few}/>
                    <Option changeOption={props.changeOption} id={props.question.id} text={'Текст'} img={text}/>
                </div>
            </div>

            <button className={s.deleteQuestionButton}
                    onClick={event => {
                        event.preventDefault();
                        props.deleteQuestion(props.question.id);
                    }}/>

            <div className={s.answer}>
                {props.question.option === 'Один вариант' && <SingleAnswerBlock answers={props.question.answers}
                                                                       addAnswer={props.addAnswer}
                                                                       id={props.question.id}
                                                                       changeAnswer={props.changeAnswer}
                />}
                {props.question.option === 'Несколько' && <FewAnswerBlock answers={props.question.answers}
                                                                 addAnswer={props.addAnswer}
                                                                 id={props.question.id}
                                                                 changeAnswer={props.changeAnswer}
                />}
                {props.question.option === 'Текст' && <TextAnswerBlock changeAnswer={props.changeAnswer}
                                                              answer={props.question.answers}
                                                              id={props.question.id}/>}
            </div>

        </div>
    );
};

export default Task;