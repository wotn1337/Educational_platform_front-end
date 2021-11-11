import React from "react";
import s from './Fragment.module.css'
import {fragmentTypeImg} from "../../../../common/fragmentsPreview";

const Fragment = (props) => {
    return (
        <div className={s.fragmentBlock}>
            <img src={fragmentTypeImg[props.fragmentType]} alt="type" className={s.fragmentType}/>
            <div className={s.title}>
                {props.title}
            </div>
            <input className={s.checkbox}
                   type="checkbox"
                   onChange={() => props.setFragmentData({id: props.id, title: props.title, type: props.fragmentType})}
            />
        </div>
    )
}

export default Fragment;