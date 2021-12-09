import React, {useState} from 'react';
import TeacherInfo from "./TeacherInfo/TeacherInfo";
import Switches from "../../common/Switches/Switches";
import s from './TeacherProfile.module.css';
import FragmentsContainer from "./Fragments/FragmentsContainer";
import Preloader from "../../common/Preloader/Preloader";
import Lessons from "./Lessons/Lessons";


const TeacherProfile = (props) => {
	const [lessons, setLessons] = useState(true);
	const [fragments, setFragments] = useState(false);

	return (
		<>
			{props.profileFetching
				? <Preloader size={200}/>
				: <TeacherInfo
					avatar={props.avatar}
					name={props.name}
					role={props.role}
				/>
			}
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