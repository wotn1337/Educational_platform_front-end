import React from 'react';
import s from './../ProfilePage.module.css'

const RoleInput = (props) => {
	const roles = {'admin': 'Админ', 'student': 'Ученик', 'creator': 'Учитель'};
	return (
		<div className="mb-3">
			<p className={`form-label ${s.formLabel}`}>Роль</p>
			<div className={s.formControl}>
				{roles[props.role]}
			</div>
		</div>
	);
}

export default RoleInput;
