import React from 'react';
import s from './Task.module.css'

const Task = () => {
    return (
            <div className={s.testWrapper}>
                <input type="text"
                       className={s.task}
                       placeholder={'Введите вопрос'}
                />
                <div className={s.dropdown}>
                    <button className={s.selector}>Выбор ответа</button>
                    <div className={s.dropdownList}>
                        <p>Один вариант</p>
                        <p>Несколько вариантов</p>
                        <p>Текст</p>
                    </div>
                </div>
                <div className={s.answer}>Ответы</div>
            </div>
    );
};

export default Task;