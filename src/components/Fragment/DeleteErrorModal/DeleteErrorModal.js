import React from 'react';
import Modal from 'react-modal';
import s from './DeleteErrorModal.module.css';
import {NavLink} from "react-router-dom";


Modal.setAppElement('#root');

const DeleteErrorModal = ({isOpen, error, closeModal}) => {
	const lessons = error.lessons.map(lesson => (
		<NavLink
			className={s.lesson}
			key={lesson.id}
			exect to={`/lesson/${lesson.id}`}
		>{lesson.title}</NavLink>
	));

	return (
        <Modal
	        isOpen={isOpen}
	        shouldCloseOnOverlayClick={true}
	        onRequestClose={closeModal}
	        overlayClassName={s.overlay}
	        className={s.content}
        >
	        <button onClick={closeModal} className={s.closeButton}/>
	        <h1 className={s.title}>{error.message}</h1>
	        <p>Данный фрагмент нельзя удалить, так как он используется в некоторых уроках.</p>
	        <div className={s.fragmentsCount}>
		        <span className={s.text}>Всего уроков с этим фрагментов:</span>
				<span className={s.count}>{error.all_lessons_count}</span>
	        </div>
	        <div className={s.fragmentsCount}>
		        <span className={s.text}>Ваших уроков с этим фрагментов:</span>
				<span className={s.count}>{error.teacher_lessons_count}</span>
	        </div>
	        <h4>Этот фрагмент содержится в следующих Ваших уроках:</h4>
	        <div className={s.lessons}>{lessons}</div>
        </Modal>
	);
};

export default DeleteErrorModal;