import React from 'react';
import s from '../Lesson.module.css';
import {withRouter} from "react-router-dom";


const ButtonsBlock = ({id, creatorId, userId, role, favorite, toggleFavorite, deleteThis, favoriteFetching, ...props}) => {
	return (
		<div className={s.buttonsBlock}>
			{(creatorId === userId || role === 'admin') &&
			<>
				<button className={'btn'} onClick={props.toggleIsEdit}>Редактировать</button>
				<button className={'btn'} onClick={() => {
					deleteThis()
						.then(() => props.history.goBack());
				}}>Удалить</button>
			</>
			}
			{role !== 'admin' &&
			<button
				className={'btn'}
				onClick={() => toggleFavorite(id)}
				disabled={favoriteFetching}
				style={{marginLeft: `${(creatorId === userId || role === 'admin') ? '' : 'auto'}`}}
			>
				{favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
			</button>
			}
		</div>
	);
};

export default withRouter(ButtonsBlock);