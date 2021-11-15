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


const FragmentCard = (props) => {
	return (
		<div className={s.fragmentCard}>
			<div className={s.preview}>
				<img src={previewImg[props.fragmentType]} alt="preview" className={s.previewImg}/>
                <button className={s.addToFavorite}
                        onClick={() =>
                            props.changeFavorite(props.id)}
                />
			</div>
			<div>
				<NavLink to={`/fragment:${props.id}`} className={s.description}>
                    <div className={s.title}>{getShortTitle(props.title, 10)}</div>
                    <div className={s.typeBlock}>
                        {russianFragmentTypes[props.fragmentType]}
                        <img src={fragmentTypeImg[props.fragmentType]} alt="type" className={s.fragmentType}/>
                    </div>
                </NavLink>
			</div>
			<Tags tags={props.tags}/>
		</div>
	);
};

export default FragmentCard;