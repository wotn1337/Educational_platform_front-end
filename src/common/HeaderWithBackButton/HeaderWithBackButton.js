import React from 'react';
import s from './HeaderWithBackButton.module.css';
import {withRouter} from "react-router-dom";


const HeaderWithBackButton = ({history, title}) => {
	return (
		<div className={s.header}>
			<button onClick={() => history.goBack()} className={'backButton'}/>
			<h1 className={'pageTitle'}>{title}</h1>
		</div>
	);
};

export default withRouter(HeaderWithBackButton);