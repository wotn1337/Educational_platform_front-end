import React from 'react';
import s from './../ProfilePage.module.css'

const RoleInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultRole" className={`form-label ${s.formLabel}`}>Роль</label>
			<div className="input-group">
				<select
					disabled
					className={`${s.formControl}`}
					id="validationDefaultRole"
					onChange={(event) => props.changeField('role', event.target.value)}
					value={props.role}
				>
					<option value="creator">Учитель</option>
					<option value="student">Ученик</option>
				</select>
			</div>
		</div>
	);
}

export default RoleInput;
