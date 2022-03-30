import React from 'react';
import GameCard from "../GameCard/GameCard";
import PairsCreate from "../PairsCreate";

const SelectGame = (props) => {
    const games = props.games?.map(game => (
        <GameCard game={game} setGameType={props.setGameType}/>
    ));
    return (
        props.gameType === 'Парочки' ? <PairsCreate setContent={props.setContent} setGameType={props.setGameType}/>
            : <div style={{display: 'grid', gap: 50, marginTop: 30}}>{games}</div>
    )
}

export default SelectGame;