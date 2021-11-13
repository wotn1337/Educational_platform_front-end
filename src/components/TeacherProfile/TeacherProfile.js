import React, {useState} from 'react';
import TeacherInfo from "./TeacherInfo/TeacherInfo";
import Switches from "../../common/Switches/Switches";
import s from './TeacherProfile.module.css';


const TeacherProfile = (props) => {
	const [lessons, setLessons] = useState(true);
	const [fragments, setFragments] = useState(false);

	return (
		<>
			<TeacherInfo
				avatar={props.avatar}
				name={props.name}
				role={props.role}
				email={props.email}
			/>
			<Switches
				switches={{
					'Уроки пользователя': [lessons, setLessons],
					'Фрагменты пользователя': [fragments, setFragments],
				}}
			/>
			<main>
				{lessons && <div>lessons</div>}
				{fragments && <div>fragments</div>}
			</main>
		</>
	);
};

export default TeacherProfile;