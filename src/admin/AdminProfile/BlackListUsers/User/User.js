import React, {useState} from "react";
import s from '../BlackList.module.css';

const User = (props) => {
	const [unblocked, setUnblocked] = useState(false);
	const unblock = () => {
		setUnblocked(true);
		props.unblockUser(props.user.id);
	}
	const roles = {'admin': 'Админ', 'student': 'Ученик', 'creator': 'Учитель'};
	return (
		<tr className={unblocked && s.unblockedUser}>
			<td>{props.user.name}</td>
			<td>{props.user.email}</td>
			<td>{roles[props.user.role]}</td>
			<td>{
				<button
					className={`${s.btn} ${s.btnUnblock}`}
					onClick={unblock}
				> </button>
			}
			</td>
		</tr>
	)
}

export default User;