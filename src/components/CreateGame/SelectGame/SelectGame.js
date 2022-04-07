import React from 'react';
import GameCard from "../GameCard/GameCard";
import PairsCreate from "../PairsCreate";
//import AssociationsCreateContainer from "../Associations/AssociationsCreateContainer";

const SelectGame = (props) => {
    const games = props.games?.map(game => (
        <GameCard game={game} setGameType={props.setGameType} key={game.id}/>
    ));
    return (
        <>
            {props.gameType === 'pairs'
                && <PairsCreate setContent={props.setContent} setGameType={props.setGameType}/>}
            {/*{props.gameType === 'matchmaking'*/}
            {/*    && <AssociationsCreateContainer setContent={props.setContent} setGameType={props.setGameType}/>}*/}
            {!props.gameType && <div style={{display: 'grid', gap: 50, marginTop: 30}}>{games}</div>}
        </>

    )
}

export default SelectGame;