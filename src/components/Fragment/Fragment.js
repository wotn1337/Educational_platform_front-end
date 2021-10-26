import React from "react";
import s from './Fragment.module.css'

const Fragment = (props) => {
    return (
        <div className={s.fragmentWrapper}>
            <div className={s.name}>
                {props.title}
            </div>

            <div className={s.fragmentBlock} dangerouslySetInnerHTML={{__html: props.content}}>
            </div>

            <div className={s.buttonsBlock}>
                <button className={s.btn}>
                    Редактировать
                </button>
                <button className={s.btn}>
                    Удалить
                </button>
                <button className={s.btn}>
                    Добавить в избранное
                </button>
            </div>
        </div>
    )
}


export default Fragment;