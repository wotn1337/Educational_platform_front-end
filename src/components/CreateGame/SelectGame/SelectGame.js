import React, {useEffect} from 'react';
import GameCard from "../GameCard/GameCard";
import PairsCreate from "../Pairs/PairsCreate";
import AssociationsCreateContainer from "../Associations/AssociationsCreateContainer";
import s from "../../CreateFragment/CreateImage/CreateImage.module.css";
import FragmentTitle from "../../CreateFragment/FragmentTitle/FragmentTitle";
import UploadFon from "../../CreateLesson/UloadFon/UploadFon";
import SequenceCreateContainer from "../Sequence/SequenceCreateContainer";
import PuzzlesCreateContainer from "../Puzzles/PuzzlesCreateContainer";

const SelectGame = (props) => {
    const gamesTemplate = props.games?.map(game => (
        <GameCard game={game} setGameType={props.setGameType} key={game.id}/>
    ));

    useEffect(() => {
        if (props.games && props.gameType) {
            const game = props.games.find(game => game.type === props.gameType)
            props.setTask(game.task)
        }
    }, [props.gameType])

    return (
        <>
            {props.gameType &&
                <>
                    {!props.isEdit && <FragmentTitle/>}
                    {!props.isEdit && <button className="backButton" onClick={() => props.setGameType(undefined)}/>}
                    {!props.isEdit && <UploadFon type={'fragment'} fon={props.fon} setFon={props.setFon}/>}
                    <div className={s.annotation}>
                        <h3>Описание задания</h3>
                        <textarea className={`textarea ${s.annotationText}`}
                                  value={props.task}
                                  onChange={e => props.setTask(e.target.value)}/>
                    </div>
                </>
            }
            {props.gameType === 'pairs'
                && <PairsCreate setContent={props.setContent} setGameType={props.setGameType}/>}
            {props.gameType === 'matchmaking'
                && <AssociationsCreateContainer setContent={props.setContent} setGameType={props.setGameType}/>}
            {props.gameType === 'sequences'
                && <SequenceCreateContainer setContent={props.setContent} setGameType={props.setGameType}/>}
            {props.gameType === 'puzzles'
                && <PuzzlesCreateContainer setGameType={props.setGameType}/>}

            {!props.gameType && <div style={{display: 'grid', gap: 50, marginTop: 30}}>{gamesTemplate}</div>}
        </>
    )
}

export default SelectGame;