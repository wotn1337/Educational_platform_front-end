import React from 'react';
import TeacherInfo from "./TeacherInfo/TeacherInfo";


const TeacherProfile = (props) => {
	return (
		<TeacherInfo
			avatar={props.avatar}
			name={props.name || 'Какой-то крутой препод'}
			role={props.role || 'creator'}
			email={props.email || 'testEmail@mail.com'}
		/>
	);
};

export default TeacherProfile;