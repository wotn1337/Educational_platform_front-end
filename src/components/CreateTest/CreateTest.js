import React from 'react';
import s from "./Task/Task.module.css";
import Task from "./Task/Task";


const CreateTest = (props) => {
    const tasks = props.questions.map(question => {
        return (
            <Task
                question={question}
                changeOption={props.changeOption}
                changeQuestion={props.changeQuestion}
                addAnswer={props.addAnswer}
                changeAnswer={props.changeAnswer}
                deleteQuestion={props.deleteQuestion}
            />
        )
    });

    return (
        <>
            {tasks}
            <button
                className={s.button}
                onClick={event => {
                    event.preventDefault();
                    props.addQuestion();
                }}
            />
        </>
    );

};

export default CreateTest;