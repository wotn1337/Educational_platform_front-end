import React from 'react';
import s from './AnswerBlocks.module.css'

const SingleAnswerBlock = (props) => {
    return (
        <div>
            <div>
                <input type="radio" id="1" name="answer" value="1"/>
                <label htmlFor="huey">Вариант 1</label>
            </div>

            <div>
                <input type="radio" id="2" name="answer" value="2"/>
                <label htmlFor="dewey">Вариант 2</label>
            </div>
        </div>
    )
}

export default SingleAnswerBlock;