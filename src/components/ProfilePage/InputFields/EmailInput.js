import React from 'react';
import s from './../ProfilePage.module.css'

const EmailInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultEmail" className={`form-label ${s.formLabel}`}>Email</label>
			<div className="input-group">
				<input
					disabled
					type="email"
					className={`${s.formControl}`}
					placeholder={props.email}
					id="validationDefaultEmail"
					onChange={(event) => props.changeField('email', event.target.value)}
					value={props.email}
				/>
			</div>
		</div>
	);
}

export default EmailInput;
