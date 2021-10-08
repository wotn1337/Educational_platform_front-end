import React from 'react';
import s from './Input.module.css'

const NameInput = (props) => {
	return (
		<div className="mb-3">
			{/*<label htmlFor="validationCustomUsername" className={`form-label ${s.formLabel}`}>ФИО</label>*/}
			<div className="input-group">
				<input
					type="text"
					className={`form-control ${s.formControl}`}
					placeholder="Фамилия Имя"
					id="validationCustomUsername"
					onChange={(event) => props.changeField('name', event.target.value)}
					value={props.name}
				/>
			</div>
			<div className={`invalid-feedback ${s.invalidFeedback}`}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default NameInput;
