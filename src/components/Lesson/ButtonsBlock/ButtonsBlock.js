import React from 'react';
import s from '../Lesson.module.css';


const ButtonsBlock = ({lessonId, creatorId, userId, role, favorite, toggleFavorite, deleteLesson, favoriteFetching, ...props}) => {
	return (
		<div className={s.buttonsBlock}>
			{(creatorId === userId || role === 'admin') &&
			<>
				<button className={'btn'} onClick={props.toggleIsEdit}>Редактировать</button>
				<button className={'btn'} onClick={() => deleteLesson(lessonId)}>Удалить</button>
			</>
			}
			{role !== 'admin' &&
			<button
				className={'btn'}
				onClick={() => toggleFavorite(lessonId)}
				disabled={favoriteFetching}
				style={{marginLeft: `${(creatorId === userId || role === 'admin') ? '' : 'auto'}`}}
			>
				{favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
			</button>
			}
		</div>
	);
};

export default ButtonsBlock;