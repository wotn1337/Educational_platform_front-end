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
                   onChange={event => {
                       let text = event.target.value;
                       event.preventDefault();
                       props.changeQuestion(props.id, text)
                   }}
            />

            <div className={s.dropdown}>
                <button className={s.selector}>{props.option}</button>
                <img src={arrow} alt="arrow"/>
                <div className={s.dropdownList}>
                    <Option changeOption={props.changeOption} id={props.id} text={'Один вариант'} img={single}/>
                    <Option changeOption={props.changeOption} id={props.id} text={'Несколько'} img={few}/>
                    <Option changeOption={props.changeOption} id={props.id} text={'Текст'} img={text}/>
                </div>
            </div>

            <div className={s.answer}>
                {props.option === 'Один вариант' && <SingleAnswerBlock/>}
                {props.option === 'Несколько' && <FewAnswerBlock/>}
                {props.option === 'Текст' && <TextAnswerBlock/>}
            </div>

        </div>
    );
};

export default Task;