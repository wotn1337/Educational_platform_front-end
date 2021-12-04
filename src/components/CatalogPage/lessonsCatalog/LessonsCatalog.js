import React from 'react';
import s from './LessonsCatalog.module.css';
import LessonsListContainer from "./LessonsList/LessonsListContainer";
import LessonSearchBlockContainer from "./LessonSearchBlock/LessonSearchBlockContainer";
import {withoutAuthRedirectToAuthPage} from "../../../hoc/withoutAuthRedirectToAuthPage";

const LessonsCatalog = (props) => {
	return (
		<section className={s.content}>
			<h1 className={'pageTitle'}>Каталог уроков</h1>
			<LessonSearchBlockContainer page={'catalog'}/>
			<LessonsListContainer page={'catalog'}/>
		</section>
	);
};

export default withoutAuthRedirectToAuthPage(LessonsCatalog);