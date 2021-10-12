import React from 'react';
import s from './Input.module.css'

const EmailInput = (props) => {
	return (
		<div className="mb-3">
			{/*<label htmlFor="validationDefaultEmail" className="form-label">Email</label>*/}
			<div className="input-group">
				<input
					type="email"
					className={`form-control ${s.formControl}`}
					placeholder="Email"
					id="validationDefaultEmail"
					onChange={(event) => props.changeField('email', event.target.value)}
					value={props.email}
				/>
			</div>
			<div className={`invalid-feedback ${s.invalidFeedback}`}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default EmailInput;
