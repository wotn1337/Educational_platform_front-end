import React from "react";
import s from './Step.module.css';


const Step = (props) => {
	return (
		<div className={`${s.step}`}>
			<img src={props.image} alt="step" width={165} height={165} className={s.stepImage}/>
			<p className={s.title}>{props.title}</p>
			<p className={s.text}>{props.text}</p>
		</div>
	);
}

export default Step;