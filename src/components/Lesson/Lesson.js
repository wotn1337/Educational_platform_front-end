import React from 'react';
import s from './Lesson.module.css';
import nav from './Navigation/Navigation.module.css'
import Navigation from "./Navigation/Navigation";
import Fragment from "./Fragment/Fragment";
import Preloader from "../../common/Preloader/Preloader";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import EditingLesson from "./EditingLesson/EditingLesson";
import LessonPreview from "./LessonPreview/LessonPreview";
import MobileNav from "./Navigation/MobileNavigation/MobileNav";
import HeaderWithBackButton from "../../common/HeaderWithBackButton/HeaderWithBackButton";


const Lesson = ({id, fragments, currentFragment, setCurrentFragment, lessonTitle, isEdit, ...props}) => {
	return (
		<section className={"content"}>
			{!isEdit ?
				<>
					{props.currentFragmentOrder !== -1 &&
						<div
							className={`${nav.btn} ${nav.btnBack} ${s.navBtn} ${s.backBtn}`}
							onClick={() => setCurrentFragment(props.prevFragmentOrder)}
						/>
					}
					{props.currentFragmentOrder !== fragments.length - 1 &&
						<div
							className={`${nav.btn} ${nav.btnForward} ${s.navBtn} ${s.forwardBtn}`}
							onClick={() => setCurrentFragment(props.nextFragmentOrder)}
						/>
					}
					<HeaderWithBackButton title={lessonTitle}/>
					<section className={s.lesson}>
						<Navigation fragments={fragments} setCurrentFragment={setCurrentFragment}
						            className={s.navigation} current={currentFragment}/>
						{props.isFetching
							? <Preloader size={200}/>
							: <>
								{
									currentFragment
										? <Fragment fragment={currentFragment}
										            toggleFavorite={props.changeFavorite}
										            toggleCurrentFragmentFavorite={props.toggleCurrentFragmentFavorite}
										            className={s.fragment}
										            setCurrentFragment={setCurrentFragment}
										            fragmentsCount={fragments.length}
										/>
										: <LessonPreview
											image={props.fon}
											creatorName={props.creatorName}
											creatorAvatar={props.creatorAvatar}
											creatorId={props.creatorId}
											annotation={props.lessonAnnotation}
											tags={props.tags}
											className={s.fragment}
										/>
								}
							</>
						}
					</section>
					<MobileNav
						setCurrentFragment={setCurrentFragment}
						prevOrder={props.prevFragmentOrder}
						nextOrder={props.nextFragmentOrder}
						current={props.currentFragmentOrder}
						length={fragments.length}
					/>
					<ButtonsBlock
						id={id}
						creatorId={props.creatorId}
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
					deleteFragment={props.deleteFragment}
					fon={props.fon}
					setFon={props.setFon}
					ageLimitId={props.ageLimitId}
					setAgeLimit={props.setAgeLimit}
				/>
			}
		</section>
	);
};

export default Lesson;
