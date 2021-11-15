import React from 'react';
import s from "./Switches.module.css";


const toggleSwitches = (currentSwitch, switches) => {
	for (const i in switches) {
		if (i === currentSwitch) {
			switches[i][1](true);
		} else {
			switches[i][1](false);
		}
	}
};


const Switches = ({switches}) => {
	const menu = [];
	for (const i in switches) {
		menu.push(
			<div
				className={`${s.switch} ${switches[i][0] ? s.switchActive : ''}`}
				onClick={() => toggleSwitches(i, switches)}
				key={i}
			>{i}</div>
		);
	}

	return (
		<div className={s.switches}>
			{menu}
		</div>
	);
};

export default Switches;