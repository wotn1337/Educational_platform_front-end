import React, {useEffect} from 'react'
import s from './ExampleModal.module.css'
import Modal from "react-modal";
import pairs from '../../../assets/img/games/examples/pairs.gif'
import associations from '../../../assets/img/games/examples/associations.gif'
import sequences from '../../../assets/img/games/examples/sequences.gif'
import puzzles from '../../../assets/img/games/examples/puzzle.gif'

const paths = {
	'pairs': pairs,
	'matchmaking': associations,
	'sequences': sequences,
	'puzzles': puzzles
}


const ExampleModal = ({open, handleClose, gameType}) => {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open])

	return (
		<Modal
			isOpen={open}
			className={s.modal}
			overlayClassName={s.overlay}
			onRequestClose={handleClose}
			shouldCloseOnOverlayClick={true}
		>
			<div className={s.modalInner}>
				<img src={paths[gameType]} alt="" className={s.example}/>
				<button onClick={handleClose} className='btn'>Закрыть пример</button>
			</div>
		</Modal>
	)
}

export default ExampleModal