import React, {useState} from "react";
import s from '../BlackList.module.css';
import {roles} from "../../../../common/roles";
import Preloader from "../../../../components/Preloader/Preloader";

const User = (props) => {
	const [unblocked, setUnblocked] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const unblock = () => {
		setIsFetching(true);
		props.unblockUser(props.user.id)
			.then(() => {
				setUnblocked(true);
				setIsFetching(false);
			});
	}

	return (
		<tr className={unblocked ? s.unblockedUser : undefined}>
			<td>{props.user.name}</td>
			<td>{props.user.email}</td>
			<td>{roles[props.user.role]}</td>
			<td>{isFetching
				? <Preloader size={'30px'}/>
				: <button className={`${s.btn} ${s.btnUnblock}`} onClick={unblock}> </button>
			}
			</td>
		</tr>
	)
}

export default User;