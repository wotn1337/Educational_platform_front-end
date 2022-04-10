import React from 'react';
import s from './AssociationPair.module.css';
import AssociationCard from "./AssociationCard/AssociationCard";
import Tippy from "@tippyjs/react";

const AssociationPair = ({setContent, setGameType, ...props}) => {
    let cards=[];
    for (let i=0; i<2; i++) {
       cards.push(<AssociationCard key={i}
                                   pairId={props.pairId}
                                   imageId={i}
                                   image={props.content[i]}
                                   isNew={props.isNew}
                                   isEdit={props.isEdit}
                                   setContent={props.setContent}
                                   setAssociation={props.setAssociation}/>)
    }
    return (
        <Tippy
            content={<button className={s.deletePair}
                             onClick={event => {
                                 event.preventDefault();
                                 props.deleteAssociation(props.pairId)
                             }}/>}
            placement='right-start'
            arrow={false}
            animation='fade'
            delay={[0, 50]}
            interactive={true}
        >
            <section className={s.pairBlock} key={props.pairId}>
                {cards}
            </section>
        </Tippy>
    );
};

export default AssociationPair;