import React from 'react';
import s from './Input.module.css';


const Input = ({placeholder, value, onChange, style, disabled = false}) => {
	return (
		<input
			type={'text'}
			placeholder={placeholder}
			className={s.input}
			value={value}
			onChange={event => onChange(event.target.value)}
			disabled={disabled}
		/>
	);
};

export default Input;