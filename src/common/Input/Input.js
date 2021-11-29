import React from 'react';
import s from './Input.module.css';


const Input = ({placeholder, value, onChange, style, disabled = false, ...props}) => {
	return (
		<input
			type={'text'}
			placeholder={placeholder}
			className={s.input}
			value={value}
			onChange={event => onChange(event.target.value)}
			style={style}
			disabled={disabled}
		/>
	);
};

export default Input;