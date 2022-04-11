import React from 'react';
import s from './Task.module.css';
import {soundTask} from "../Audio/soundTask";


const Task = ({task, taskAudio}) => {
	return (
		<div className={s.taskBlock}>
			<button className={s.soundButton} onClick={() => soundTask(taskAudio)}/>
			<p className={s.task}>{task}</p>
		</div>
	);
};

export default Task;