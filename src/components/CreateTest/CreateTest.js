import React from 'react';
import s from "./Task/Task.module.css";
import Task from "./Task/Task";


const CreateTest = (props) => {
    const questions = props.questions.map(question => {
        return (
            <Task
                id={question.id}
                question={question.question}
                option={question.option}
                answers={question.answers}
                changeOption={props.changeOption}
                changeQuestion={props.changeQuestion}
            />
        )

    });

    return (
        <>
            {questions}
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