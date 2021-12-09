import React from 'react';
import s from './Toggle.module.css';
import selectArrow from "../../../../assets/img/selectArrow.svg";


const Toggle = ({current, showOther, setCurrent, other, setOther, setShowOther, rusPages, ...props}) => {
	const togglePages = () => {
		setCurrent(other);
		setOther(current);
	}

	return (
		<div
			className={s.select}
			onMouseEnter={() => setShowOther(true)}
			onMouseLeave={() => setShowOther(false)}
		>
			<div className={s.selectHead}>
				{rusPages[current]}
				<img src={selectArrow} alt="select arrow" className={s.arrow}/>
			</div>
			{showOther &&
				<div className={s.otherType} onClick={togglePages}>
					{rusPages[other]}
				</div>
			}
		</div>
	);
};

export default Toggle;