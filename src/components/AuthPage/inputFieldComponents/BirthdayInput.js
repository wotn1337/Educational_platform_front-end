import React from 'react';

const BirthdayInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationCustomDate" className="form-label">Дата рождения</label>
			<div className="input-group">
				<input
					type="date"
					className="form-control"
					id="validationCustomDate"
					onChange={(event) => props.changeField('birthday', event.target.value)}
					value={props.birthday}
				/>
				<div className="invalid-feedback" style={{display: 'block'}}>
					{props.validationMessage}
				</div>
			</div>
		</div>
	);
}

export default BirthdayInput;
