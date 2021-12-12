import React from 'react';
import s from './Lesson.module.css';
import Navigation from "./Navigation/Navigation";
import Fragment from "./Fragment/Fragment";
import {Route} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import EditingLesson from "./EditingLesson/EditingLesson";
import LessonPreview from "./LessonPreview/LessonPreview";


const Lesson = ({id, fragments, currentFragment, setCurrentFragment, lessonTitle, isEdit, ...props}) => {
	return (
		<section className={s.content}>
			{!isEdit ?
				<>
					<h1 className={'pageTitle'}>{lessonTitle}</h1>
					<section className={s.lesson}>
						<Navigation fragments={fragments} lessonId={id} setCurrentFragment={setCurrentFragment}/>
						{props.isFetching
							? <Preloader size={200}/>
							: <>
								{
									currentFragment
										? <Route path={`/lesson/${id}/:fragmentId`} render={() => <Fragment fragment={currentFragment}/>}/>
										: <LessonPreview
											image={undefined}
											creatorName={props.creatorName}
											creatorAvatar={props.creatorAvatar}
											annotation={props.lessonAnnotation}
											tags={props.tags}
										/>
								}
								</>
						}

					</section>
					<ButtonsBlock
						id={id}
						creatorId={props.creatorId}
						userId={props.userId}
						role={props.role}
						favorite={props.favorite}
						favoriteFetching={props.favoriteFetching}
						deleteThis={props.deleteLesson}
						toggleFavorite={props.toggleFavorite}
						toggleIsEdit={props.toggleIsEdit}
					/>
				</>
				: <EditingLesson
					title={lessonTitle}
					changeTitle={props.changeLessonTitle}
					annotation={props.lessonAnnotation}
					changeAnnotation={props.changeLessonAnnotation}
					fragments={fragments}
					setFragments={props.setFragments}
					tags={props.tags}
					deleteTag={props.deleteTag}
					addTag={props.addTag}
					returnTag={props.returnTag}
					updateLesson={props.updateLesson}
					toggleIsEdit={props.toggleIsEdit}
					isFetching={props.isFetching}
				/>
			}
		</section>
	);
};

export default Lesson;