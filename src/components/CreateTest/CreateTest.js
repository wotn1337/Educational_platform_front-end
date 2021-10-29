import React from 'react';
import s from "./Task/Task.module.css";


const CreateTest = (props) => {
	return (
		<>
			{props.children}
			<button
				className={s.button}
				onClick={event => {
					event.preventDefault();
					props.addTask();
				}}
			/>
		</>
	);
};

export default CreateTest;