import React from 'react';
import s from './Input.module.css'

const BirthdayInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationCustomDate" className={`form-label ${s.formLabel}`}>Дата рождения</label>
			<div className="input-group">
				<input
					type="date"
					className={`form-control ${s.formControl}`}
					id="validationCustomDate"
					onChange={(event) => props.changeField('birthday', event.target.value)}
					value={props.birthday}
				/>
			</div>
			<div className={`invalid-feedback ${s.invalidFeedback}`}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default BirthdayInput;
