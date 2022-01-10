import React from 'react';
import Modal from 'react-modal';
import s from './DeleteErrorModal.module.css';
import {NavLink} from "react-router-dom";


Modal.setAppElement('#root');
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const DeleteErrorModal = ({isOpen, error, closeModal}) => {
	const lessons = error.lessons.map(lesson => (
		<NavLink exect to={`/lesson/${lesson.id}`} style={{display: 'block'}}>{lesson.title}</NavLink>
	));

	return (
        <Modal
	        isOpen={isOpen}
	        style={customStyles}
	        shouldCloseOnOverlayClick={true}
	        onRequestClose={closeModal}
	        overlayClassName={s.overlay}
        >
	        <button onClick={closeModal}>X</button>
	        <h3>{error.message}</h3>
	        <h4>Этот фрагмент содержится в следующих ваших уроках:</h4>
	        {lessons}
        </Modal>
	);
};

export default DeleteErrorModal;