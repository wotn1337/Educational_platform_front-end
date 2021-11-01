import React from 'react';
import s from './AnswerBlocks.module.css'

const FewAnswerBlock = (props) => {
    return (
        <div>
            <div>
                <input type="checkbox" id="1" name="answer"/>
                <label htmlFor="1">Вариант 1</label>
            </div>

            <div>
                <input type="checkbox" id="2" name="answer"/>
                <label htmlFor="2">Вариант 2</label>
            </div>

            <div>
                <input type="checkbox" id="3" name="answer"/>
                <label htmlFor="3">Вариант 3</label>
            </div>
        </div>
    )
}

export default FewAnswerBlock;