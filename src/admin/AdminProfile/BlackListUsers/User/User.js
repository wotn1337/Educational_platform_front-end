import React, {useState} from "react";
import s from '../BlackList.module.css';

const User = (props) => {
	const [unblocked, setUnblocked] = useState(false);
	const unblock = () => {
		setUnblocked(true);
		props.unblockUser(props.user.id);
	}
	return (
		<tr className={unblocked && s.unblockedUser}>
			<td>{props.user.name}</td>
			<td>{props.user.email}</td>
			<td>{props.user.role}</td>
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