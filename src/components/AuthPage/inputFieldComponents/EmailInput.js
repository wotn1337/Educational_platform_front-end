import React from 'react';

const EmailInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultEmail" className="form-label">Email</label>
			<div className="input-group">
				<input
					type="email"
					className="form-control"
					id="validationDefaultEmail"
					onChange={(event) => props.changeField('email', event.target.value)}
					value={props.email}
				/>
				<div className="invalid-feedback" style={{display: 'block'}}>
					{props.validationMessage}
				</div>
			</div>
		</div>
	);
}

export default EmailInput;
