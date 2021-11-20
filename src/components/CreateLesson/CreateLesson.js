import React from "react";
import s from './CreateLesson.module.css';
import LessonTitle from "./LessonTitle/LessonTitle";
import ConstructorBlock from "./СonstructorBlock/СonstructorBlock";


const CreateLesson = (props) => {
    return (
        <div className={s.content}>
            <h1>Создать урок</h1>
            <LessonTitle/>
            <ConstructorBlock
                fragments={props.lessonFragments}
            />
            <button className={s.createButton}>Создать</button>
        </div>
    );
}

export default CreateLesson;