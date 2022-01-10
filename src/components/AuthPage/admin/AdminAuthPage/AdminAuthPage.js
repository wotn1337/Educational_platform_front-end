import React from 'react';
import LoginContainer from "./Login/LoginContainer";
import s from '../../AuthPage.module.css';

const AdminAuthPage = () => {
	return (
		<div className={`container-md ${s.container_md}`}>
			<LoginContainer/>
		</div>
	);
}

export default AdminAuthPage;
