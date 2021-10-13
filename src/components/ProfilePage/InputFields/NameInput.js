import React from 'react';
import s from './../ProfilePage.module.css'

const NameInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultEmail" className={`form-label ${s.formLabel}`}>Новое имя пользователя</label>
			<div className="input-group">
				<input
					type="text"
					className={`${s.formControl}`}
					placeholder={props.name}
					id="validationDefaultEmail"
					onChange={(event) => props.changeField('name', event.target.value)}
					value={props.name}
				/>
			</div>
		</div>
	);
}

export default NameInput;
