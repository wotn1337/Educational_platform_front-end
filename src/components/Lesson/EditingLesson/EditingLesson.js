import React from 'react';
import LessonTitle from "../../CreateLesson/LessonTitle/LessonTitle";
import LessonAnnotation from "../../CreateLesson/LessonAnnotation/LessonAnnotation";
import ConstructorBlock from "../../CreateLesson/СonstructorBlock/СonstructorBlock";


const EditingLesson = ({title, changeTitle, annotation, changeAnnotation, fragments, ...props}) => {
	const fullFragments = fragments.map(fragment => ({
		id: fragment.pivot.fragment_id,
		type: fragment.fragmentgable_type,
		title: fragment.title,
		number: fragment.pivot.order
	}));
	return (
		<>
			<LessonTitle title={title} changeLessonTitle={changeTitle}/>
			<LessonAnnotation annotation={annotation} changeAnnotation={changeAnnotation}/>
			<ConstructorBlock fragments={fullFragments}/>
		</>
	);
};

export default EditingLesson;