import React from 'react';
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";


const MyLessons = (props) => {
	return (
        <section className={'content'}>
            <h1 className={'pageTitle'}>Мои уроки</h1>
	        <LessonSearchBlockContainer page={'my-lessons'}/>
	        <LessonsListContainer page={'my-lessons'} />
        </section>
	);
};

export default MyLessons;