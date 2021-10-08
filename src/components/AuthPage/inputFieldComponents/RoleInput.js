import React from 'react';
import s from './Input.module.css'

const RoleInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultRole" className={`form-label ${s.formLabel}`}>Роль</label>
			<div className="input-group">
				<select
					className={`form-select ${s.formControl}`}
					id="validationDefaultRole"
					onChange={(event) => props.changeField('role', event.target.value)}
					value={props.role}
				>
					<option value="creator">Учитель</option>
					<option value="student">Ученик</option>
				</select>
			</div>
			<div className={`invalid-feedback ${s.invalidFeedback}`}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default RoleInput;
