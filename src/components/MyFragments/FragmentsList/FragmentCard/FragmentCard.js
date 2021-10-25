import React from "react";
import s from './FragmentCard.module.css';
import {fragmentTypeImg, previewImg} from "../../../../common/fragmentsPreview";


const FragmentCard = (props) => {
	return (
		<div className={s.fragmentCard}>
			<div className={s.preview}>
				<img src={previewImg[props.fragmentType]} alt="preview" className={s.previewImg}/>
				<button className={s.addToFavorite}> </button>
			</div>
			<div className={s.description}>
				<div className={s.title}>{props.title}</div>
				<img src={fragmentTypeImg[props.fragmentType]} alt="type" className={s.fragmentType}/>
			</div>
		</div>
	);
};

export default FragmentCard;