import React from 'react';
import s from './Input.module.css'

const PasswordInput = (props) => {
	return (
		<div className="mb-3">
			{/*<label htmlFor="validationDefaultPassword" className="form-label">Пароль</label>*/}
			<div className="input-group">
				<input
					type="password"
					className={`form-control ${s.formControl}`}
					placeholder="Password"
					id="validationDefaultPassword"
					onChange={(event) => props.changeField('password', event.target.value)}
					value={props.password}
				/>
			</div>
			<div className="invalid-feedback" style={{display: 'block'}}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default PasswordInput;
