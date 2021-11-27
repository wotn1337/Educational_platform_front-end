import React from 'react';
import s from './Lesson.module.css';
import Navigation from "./Navigation/Navigation";
import Fragment from "./Fragment/Fragment";
import {Route} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import EditingLesson from "./EditingLesson/EditingLesson";


const Lesson = ({id, fragmentsTitles, currentFragment, changeFragment, lessonTitle, isEdit, ...props}) => {
	return (
		<section className={s.content}>
			{!isEdit ?
				<>
					<h1 className={'pageTitle'}>{lessonTitle}</h1>
					<section className={s.lesson}>
						<Navigation fragments={fragmentsTitles} lessonId={id} changeFragment={changeFragment}/>
						{props.isFetching ? <Preloader size={200}/>
							: <>{currentFragment && <Route path={`/lesson/${id}/:fragmentId`}
							                               render={() => <Fragment fragment={currentFragment}/>}/>}</>
						}

					</section>
					<ButtonsBlock
						lessonId={id}
						creatorId={props.creatorId}
						userId={props.userId}
						role={props.role}
						favorite={props.favorite}
						favoriteFetching={props.favoriteFetching}
						deleteLesson={props.deleteLesson}
						toggleFavorite={props.toggleFavorite}
						toggleIsEdit={props.toggleIsEdit}
					/>
				</>
				: <EditingLesson
					title={lessonTitle}
					changeTitle={props.changeLessonTitle}
					annotation={props.lessonAnnotation}
					changeAnnotation={props.changeLessonAnnotation}
					fragments={fragmentsTitles}
				/>
			}
		</section>
	);
};

export default Lesson;