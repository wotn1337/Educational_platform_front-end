import React from "react";
import s from './Modal.module.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)}>
            <div className={s.modalContent} onClick={event => event.stopPropagation()}>
                {children}
                <button onClick={() => setActive(false)}>
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default Modal;