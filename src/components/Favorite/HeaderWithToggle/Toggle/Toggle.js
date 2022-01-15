import React, {useState} from 'react';
import s from './Toggle.module.css';
import selectArrow from "../../../../assets/img/selectArrow.svg";
import {rusTypes} from "../../../../common/rusTypes";


const Toggle = ({type, toggle, page}) => {
	const [showOther, setShowOther] = useState(false);

	return (
		<div
			className={s.select}
			onMouseEnter={() => setShowOther(true)}
			onMouseLeave={() => setShowOther(false)}
		>
			<div>
				{rusTypes[type.current]}
				<img src={selectArrow} alt="select arrow" className={s.arrow}/>
			</div>
			{showOther &&
				<div className={s.otherType} onClick={() => toggle(page)}>
					{rusTypes[type.other]}
				</div>
			}
		</div>
	);
};

export default Toggle;