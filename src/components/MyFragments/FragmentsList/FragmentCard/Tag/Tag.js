import React, {useState} from 'react';
import s from "../FragmentCard.module.css";


const Tag = (props) => {
	const [show, setShow] = useState(props.index === 0);
	return (
		<div
			className={s.tag}
			onMouseEnter={props.index !== 0 ? () => setShow(true) : undefined}
			onMouseLeave={props.index !== 0 ? () => setShow(false) : undefined}
		>
			{show && props.tag.value}
		</div>
	);
};

export default Tag;