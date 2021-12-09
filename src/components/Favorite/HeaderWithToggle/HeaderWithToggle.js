import React from 'react';
import s from './HeaderWithToggle.module.css';
import Toggle from "./Toggle/Toggle";


const HeaderWithToggle = ({title, current, showOther, setCurrent, other, setOther, setShowOther, rusPages, ...props}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.titleBlock}>
				<h1 className={'pageTitle'}>{title}:</h1>
				<Toggle
					setCurrent={setCurrent}
					current={current}
					other={other}
					setOther={setOther}
					showOther={showOther}
					setShowOther={setShowOther}
					rusPages={rusPages}
				/>
			</div>
		</div>
	);
};

export default HeaderWithToggle;