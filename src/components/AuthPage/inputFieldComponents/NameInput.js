import React from 'react';

const NameInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationCustomUsername" className="form-label">ФИО</label>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					id="validationCustomUsername"
					onChange={(event) => props.changeField('name', event.target.value)}
					value={props.name}
				/>
			</div>
			<div className="invalid-feedback" style={{display: 'block'}}>
				{props.validationMessage}
			</div>
		</div>
	);
}

export default NameInput;
