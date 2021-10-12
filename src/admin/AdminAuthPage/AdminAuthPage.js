import React from 'react';
import LoginContainer from "./Login/LoginContainer";
import s from './AuthPage.module.css'
import {Redirect} from "react-router-dom";

const AdminAuthPage = (props) => {
	if (props.isAuth) {
		return <Redirect to={'/'}/>;
	}

	return (
		<div className={`container-md ${s.container_md}`}>
			<LoginContainer/>
		</div>
	);
}

export default AdminAuthPage;
