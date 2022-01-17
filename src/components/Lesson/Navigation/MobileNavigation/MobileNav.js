import React from "react";
import s from '../Navigation.module.css';

const MobileNavigation = ({setCurrentFragment, prevOrder, nextOrder, length, current}) => {
	return (
		<section className={s.mobileNavigation}>
			{current !== -1 &&
				<div className={`${s.btn} ${s.btnBack}`} onClick={() => setCurrentFragment(prevOrder)}/>
			}

			{current !== length - 1 &&
				<div className={`${s.btn} ${s.btnForward}`} onClick={() => setCurrentFragment(nextOrder)}/>
			}
		</section>
	)
}

export default MobileNavigation
