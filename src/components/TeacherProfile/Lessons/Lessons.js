import React from 'react';
import LessonsListContainer from "../../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";


const Lessons = (props) => {
	return (
		<LessonsListContainer page={'teacher'} teacherId={props.teacherId}/>
	);
};

export default Lessons;