import React from "react";
import s from "../AllUsers.module.css";
import Preloader from "../../../../components/Preloader/Preloader";


const UserButtons = (props) => {
	if (!props.isFetching) {
		return (
			<>
				<td>{!props.blocked
					? <button
						className={`${s.btn} ${s.btnBlock}`}
						onClick={props.blockUser}
					> </button>
					: <button
						className={`${s.btn} ${s.btnUnblock}`}
						onClick={props.unblockUser}
					> </button>
				}</td>
				<td>
					{!props.isEdit
						? <button onClick={props.toggleEditMode} className={`${s.btn} ${s.btnEdit}`}> </button>
						: <button onClick={props.sendNewUserData} className={`${s.btn} ${s.btnSubmit}`}> </button>
					}
				</td>
			</>
		);
	}

	return (<td colSpan={2}><Preloader size={'30px'}/></td>);
}

export default UserButtons;