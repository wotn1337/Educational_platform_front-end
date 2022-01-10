import React from 'react';
import s from '../Lesson.module.css';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";


const ButtonsBlock = ({id, creatorId, userId, isAdmin, favorite, toggleFavorite, deleteThis, favoriteFetching, ...props}) => {
	return (
		<div className={s.buttonsBlock}>
			{(creatorId === userId || isAdmin) &&
			<>
				<button className={'btn'} onClick={props.toggleIsEdit}>Редактировать</button>
				<button className={'btn'} onClick={deleteThis}>Удалить</button>
			</>
			}
			{!isAdmin &&
			<button
				className={'btn'}
				onClick={() => toggleFavorite(id)}
				disabled={favoriteFetching}
				style={{marginLeft: `${(creatorId === userId || isAdmin) ? '' : 'auto'}`}}
			>
				{favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
			</button>
			}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAdmin: state.auth.isAdmin,
	userId: state.auth.userId
});

export default compose(
	withRouter,
	connect(mapStateToProps)
)(ButtonsBlock);