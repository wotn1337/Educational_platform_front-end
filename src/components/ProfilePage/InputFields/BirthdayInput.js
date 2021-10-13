import React from 'react';
import s from './../ProfilePage.module.css'

const BirthdayInput = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="validationDefaultEmail" className={`form-label ${s.formLabel}`}>Дата рождения</label>
			<div className="input-group">
				<input
					disabled
					type="date"
					className={`${s.formControl}`}
					placeholder={props.birthday}
					id="validationDefaultEmail"
					onChange={(event) => props.changeField('birthday', event.target.value)}
					value={props.birthday}
				/>
			</div>
		</div>
	);
}

export default BirthdayInput;
