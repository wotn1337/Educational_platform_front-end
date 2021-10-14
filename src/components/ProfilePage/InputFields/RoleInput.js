import React from 'react';
import s from './../ProfilePage.module.css'

const RoleInput = (props) => {
	return (
		<div className="mb-3">
			<p className={`form-label ${s.formLabel}`}>Роль</p>
			<div className={s.formControl}>
				{props.role}
			</div>
		</div>
	);
}

export default RoleInput;
