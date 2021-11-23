import React from 'react';
import s from './Lesson.module.css';
import Navigation from "./Navigation/Navigation";
import Fragment from "./Fragment/Fragment";
import {Route} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";


const Lesson = ({id, deleteLesson, toggleFavorite, favorite, favoriteFetching, fragmentsTitles, currentFragment, changeFragment, ...props}) => {
	return (
		<section className={s.content}>
			<h1 className={'pageTitle'}>Здесь будет название урока, когда Никита будет возвращать его с бэка</h1>
			<section className={s.lesson}>
				<Navigation fragments={fragmentsTitles} lessonId={id} changeFragment={changeFragment}/>
				{props.isFetching ? <Preloader size={200}/>
				: <>{currentFragment && <Route path={`/lesson/${id}/:fragmentId`} render={() => <Fragment fragment={currentFragment}/>}/>}</>
				}

			</section>
			<div className={s.buttonsBlock}>
				<button className={'btn'} disabled>Редактировать</button>
				<button className={'btn'} onClick={() => deleteLesson(id)}>Удалить</button>
				<button className={'btn'} onClick={() => toggleFavorite(id)} disabled={favoriteFetching}>
					{favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
				</button>
			</div>
		</section>
	);
};

export default Lesson;