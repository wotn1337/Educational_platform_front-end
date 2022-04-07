import React from 'react';
import s from './Card.module.css';


const Card = ({image, rotated, rotateCard, finished, size, style, innerRef, ...props}) => {
	return (
		<div
			className={`${s.card} ${rotated ? s.rotated : ''} ${finished ? s.finished : ''}`}
			onClick={rotateCard}
			style={{width: size, height: size, ...style}}
			ref={innerRef}
			{...props}
		>
			<img className={s.cardImage} src={image} alt="card"/>
		</div>
	);
};

export default Card;