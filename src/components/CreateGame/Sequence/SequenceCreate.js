import React from 'react';
import s from './SequenceCreate.module.css';
import SequenceCard from "./SequenceCard";

const SequenceCreate = (props) => {
    const sequence = props.sequence?.map(image => (
        <SequenceCard key={image.id}
                      imageId={image.id}
                      order={image.order}
                      isNew={image.isNew}
                      content={image.content}
                      isEdit={props.isEdit}
                      setSequenceImage={props.setSequenceImage}
                      setContent={props.setContent}
                      deleteSequence={props.deleteSequence}
        />
    ));

    return (
        <>
            <section className={s.createGame}>
                {!props.isEdit && <h3>Загрузите свои изображения в нужной последовательности</h3>}
                <div className={s.sequenceBlock}>
                    {sequence}
                </div>
                <div className={s.addPairButton} onClick={props.addSequence}>
                    <div className={s.plus}/>
                    <span className={s.text}>Добавить картинку</span>
                </div>
            </section>
        </>
    );
};

export default SequenceCreate;