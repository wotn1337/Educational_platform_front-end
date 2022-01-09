import React, {useState} from 'react';
import Switches from "../common/Switches/Switches";
import s from './TeacherProfile.module.css';
import FragmentsContainer from "./Fragments/FragmentsContainer";
import Lessons from "./Lessons/Lessons";
import MainUserInfo from "../ProfilePage/MainUserInfo/MainUserInfo";


const TeacherProfile = (props) => {
	const [lessons, setLessons] = useState(true);
	const [fragments, setFragments] = useState(false);

	return (
		<>
			<MainUserInfo avatar={props.avatar} name={props.name} isFetching={props.profileFetching}/>
			<Switches
				switches={{
					'Уроки пользователя': [lessons, setLessons],
					'Фрагменты пользователя': [fragments, setFragments],
				}}
			/>
			<main>
				<section className={s.content}>
					{lessons && <Lessons teacherId={props.teacherId}/>}
					{fragments && <FragmentsContainer/>}
				</section>
			</main>
		</>
	);
};

export default TeacherProfile;