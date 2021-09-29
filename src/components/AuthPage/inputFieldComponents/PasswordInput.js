import React from 'react';

const PasswordInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultPassword" className="form-label">Пароль</label>
			<div className="input-group">
				<input
					type="password"
					className="form-control"
					id="validationDefaultPassword"
					onChange={(event) => props.changeField('password', event.target.value)}
					value={props.password}
				/>
				<div className="invalid-feedback" style={{display: 'block'}}>
					{props.validationMessage}
				</div>
			</div>
		</div>
	);
}

export default PasswordInput;
