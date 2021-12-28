import React from 'react';
import s from './HeaderWithBackButton.module.css';
import {withRouter} from "react-router-dom";


const HeaderWithBackButton = ({history, title, depth, setDepth}) => {
	return (
		<div className={s.header}>
			<button onClick={() => {
				if (!depth && !setDepth) {
					history.goBack();
				} else {
					history.go(depth);
					setDepth(-1);
				}
			}} className={'backButton'}/>
			<h1 className={'pageTitle'}>{title}</h1>
		</div>
	);
};

export default withRouter(HeaderWithBackButton);