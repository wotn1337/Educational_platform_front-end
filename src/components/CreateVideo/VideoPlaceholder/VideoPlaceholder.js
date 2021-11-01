import React from 'react';
import s from './VideoPlaceholder.module.css';
import {fragmentTypeImg} from "../../../common/fragmentsPreview";
import {fragmentTypes} from "../../../common/fragmentTypes";


const VideoPlaceholder = () => {
	return (
		<div className={s.videoPlaceholder}>
			<img src={fragmentTypeImg[fragmentTypes.video]} alt="video placeholder" className={s.placeholderImg}/>
			<span className={s.placeholderText}>Здесь будет ваше видео</span>
		</div>
	);
};

export default VideoPlaceholder;