import React, {useState} from 'react';
import s from './LessonCard.module.css';
import lessonPlaceholder from '../../../../../assets/img/lessons/lessonPlaceholder.png';
import {NavLink} from "react-router-dom";
import Tags from "../../../../MyFragments/FragmentsList/FragmentCard/Tags/Tags";


const LessonCard = ({lesson, toggleFavorite, role, ...props}) => {
	const [favorite, setFavorite] = useState(lesson.favourite);
	return (
		<NavLink to={`/lesson/${lesson.id}`} className={s.lessonCard}>
			<div className={s.mainInfo}>
				<img src={lesson.fon || lessonPlaceholder} alt="lesson" className={s.preview}/>
				<div className={s.tags}>
					<Tags tags={lesson.tags}/>
				</div>
				<h3 className={s.title}>{lesson.title}</h3>
				<p className={s.annotation}>{lesson.annotation}</p>
				<span className={s.fragmentsCount}>
					<span className={s.fragmentsCountTitle}>Фрагментов в уроке: </span>
					<span className={s.count}>{lesson.fragments_count}</span>
				</span>
				{/*<NavLink to={`/lesson/${lesson.id}`} className={`${s.lessonButton} btn`}>*/}
				{/*	Перейти к материалам урока*/}
				{/*</NavLink>*/}
				{role !== 'admin' &&
				<div className={s.favorite}>
					<button
						className={`${s.addToFavorite} ${favorite ? s.inFavorite : s.notInFavorite}`}
						onClick={(event) => {
							event.preventDefault();
							toggleFavorite(lesson.id)
								.then(() => setFavorite(!favorite));
						}}
					/>
				</div>
				}
			</div>
			<div className={s.author}>Автор: <NavLink to={`/profile/${lesson.user_id}`} className={s.creatorName}>{lesson.user_name}</NavLink></div>
		</NavLink>
	)
		;
};

export default LessonCard;
