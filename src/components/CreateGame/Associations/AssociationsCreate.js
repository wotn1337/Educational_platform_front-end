import React from 'react';
import s from './AssociationsCreate.module.css';
import AssociationPair from "./AssociationPair/AssociationPair";

const AssociationsCreate = ({setContent, setGameType, ...props}) => {
    const associationPairs = props.pairs?.map(pair => (
        <AssociationPair key={pair.id}
                         pairId={pair.id}
                         content={pair.content}
                         isEdit={props.isEdit}
                         setAssociation={props.setAssociation}
                         setContent={props.setContent}
                         deleteAssociation={props.deleteAssociation}/>
    ));

    return (
        <>
            <section className={s.createGame}>
                {!props.isEdit && <h3>Загрузите свои изображения парами</h3>}
                <div className={s.pairsBlock}>
                    {associationPairs}
                </div>
                <div className={s.addPairButton} onClick={props.addAssociation}>
                    <div className={s.plus}/>
                    <span className={s.text}>Добавить пару</span>
                </div>
            </section>
        </>
    );
};

export default AssociationsCreate;