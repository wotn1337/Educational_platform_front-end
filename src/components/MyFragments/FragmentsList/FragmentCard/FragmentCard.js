import React from "react";
import s from './FragmentCard.module.css';
import {fragmentTypeImg, previewImg} from "../../../../common/fragmentsPreview";
import {NavLink} from "react-router-dom";
import {fragmentTypes, russianFragmentTypes} from "../../../../common/fragmentTypes";
import Tags from "./Tags/Tags";

const getShortTitle = (title, length) => {
	if (title.length > length) {
		return title.substr(0, length) + '…';
	}
	return title;
}


const FragmentCard = ({isAdmin, createLesson, deleteFragment, ...props}) => {
	const fon = props.fragmentType === fragmentTypes.image ? props.content : props.fon;
	const cardButton = createLesson
		? <button className={s.addToFavoriteButton + ' ' + s.deleteFragmentButton}
		          onClick={event => {
			          event.preventDefault();
			          deleteFragment(props.id);
		          }}
		/>
		: <>{
			!isAdmin &&
			<button
				className={`${s.addToFavoriteButton} ${props.isFavorite ? s.alreadyFavorite : s.addToFavorite}`}
				onClick={event => {
					event.preventDefault();
					props.changeFavorite(props.id)
				}}
			/>
		}</>

	return (
		<NavLink to={`/fragment/${props.id}`} className={s.fragmentCard}>
			<div className={s.preview}>
				<img src={fon || previewImg[props.fragmentType] || previewImg[props.content.gameType] } alt="preview" className={s.previewImg}/>
				{cardButton}
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