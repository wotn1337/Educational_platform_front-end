import React from 'react';

const RoleInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultRole" className="form-label">Роль</label>
			<div className="input-group">
				<select
					className="form-select"
					id="validationDefaultRole"
					onChange={(event) => props.changeField('role', event.target.value)}
					value={props.role}
				>
					<option value="creator">Учитель</option>
					<option value="student">Ученик</option>
				</select>
				<div className="invalid-feedback" style={{display: 'block'}}>
					{props.validationMessage}
				</div>
			</div>
		</div>
	);
}

export default RoleInput;
