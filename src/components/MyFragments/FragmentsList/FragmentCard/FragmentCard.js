import React from "react";
import s from './FragmentCard.module.css';
import {fragmentTypeImg, previewImg} from "../../../../common/fragmentsPreview";
import {NavLink} from "react-router-dom";
import {russianFragmentTypes} from "../../../../common/fragmentTypes";
import Tags from "./Tags/Tags";

const getShortTitle = (title, length) => {
	if (title.length > length) {
		return title.substr(0, length) + '…';
	}
	return title;
}


const FragmentCard = ({role, ...props}) => {
	return (
		<NavLink to={`/fragment/${props.id}`} className={s.fragmentCard}>
			<div className={s.preview}>
				<img src={props.fon || previewImg[props.fragmentType]} alt="preview" className={s.previewImg}/>
				{role !== 'admin' &&
				<button className={`${s.addToFavoriteButton} ${props.isFavorite ? s.alreadyFavorite : s.addToFavorite}`}
				        onClick={event => {
					        event.preventDefault();
					        props.changeFavorite(props.id)
				        }}
				/>
				}
			</div>
			<div>
				<div className={s.description}>
					<div className={s.title}>{getShortTitle(props.title, 10)}</div>
					<div className={s.typeBlock}>
						{russianFragmentTypes[props.fragmentType]}
						<img src={fragmentTypeImg[props.fragmentType]} alt="type" className={s.fragmentType}/>
					</div>
				</div>
			</div>
			<Tags tags={props.tags}/>
		</NavLink>
	);
};

export default FragmentCard;