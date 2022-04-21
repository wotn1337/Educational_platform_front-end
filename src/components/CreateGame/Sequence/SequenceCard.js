import React, {useState} from 'react';
import s from './SequenceCreate.module.css';
import Tippy from "@tippyjs/react";

const SequenceCard = (props) => {
    let imageId = props.imageId;
    const [imageSrc, setImageSrc] = useState(props.content ? props.content : undefined);

    return (
        <Tippy
            content={<button className={s.deletePair}
                             onClick={event => {
                                 event.preventDefault();
                                 props.deleteSequence(imageId);
                             }}/>}
            placement='right-start'
            arrow={false}
            animation='fade'
            delay={0}
            interactive={true}
        >
            <div>
                <input
                    type="file"
                    accept={'image/*'}
                    id={imageId}
                    className={'hide'}
                    onChange={e => {
                        e.preventDefault();
                        props.setSequenceImage(e.target.files[0], imageId);
                        setImageSrc(URL.createObjectURL(e.target.files[0]));
                    }}
                />
                {
                    !imageSrc ?
                        <label htmlFor={imageId}
                               className={s.uploadPreview}>Добавьте изображение</label> :
                        <div className={s.imagePreview} onClick={event => {
                                event.preventDefault();
                                props.setSequenceImage(undefined, imageId);
                                setImageSrc(undefined);
                        }}>
                            <div className={s.order}>{props.order}</div>
                            <div className={s.cross}/>
                            <img className={s.image} src={imageSrc} alt=""
                                 style={{cursor: 'pointer'}}/>
                        </div>
                }
            </div>
        </Tippy>
    );
};

export default SequenceCard;