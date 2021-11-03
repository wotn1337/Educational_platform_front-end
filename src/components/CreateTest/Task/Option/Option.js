import React from 'react';
import s from './Option.module.css'

const Option = (props) => {
	return (
		<>
			<div className={s.option}
				onClick={event => {
					event.preventDefault();
					props.changeOption(props.id, props.text);
				}}
			>
				<img src={props.img} alt="option" width={15}/>
				<p className={s.text}>{props.text}</p>
			</div>
		</>
	);
};

export default Option;