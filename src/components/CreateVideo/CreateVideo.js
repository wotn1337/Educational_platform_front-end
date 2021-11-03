import React, {useState} from 'react';
import s from './CreateVideo.module.css';
import VideoPlaceholder from "./VideoPlaceholder/VideoPlaceholder";
import {connect} from "react-redux";
import {setContent} from "../../redux/createFragmentReducer";


const CreateVideo = (props) => {
	const [inputValue, setInputValue] = useState(undefined);
	const [video, setVideo] = useState(null);
	const [videoSrc, setVideoSrc] = useState('');

	const getVideoSrc = (video) => {
		const reader = new FileReader();
		reader.readAsDataURL(video);
		reader.onloadend = function () {
			setVideoSrc([reader.result]);
		}
	}

	return (
		<div className={s.createVideo}>
			{videoSrc ? <video src={videoSrc} controls={'controls'}/> : <VideoPlaceholder />}
			<input
				className={s.hide}
				type='file'
				id='upload'
				onChange={e => {
					setInputValue(e.target.value);
					setVideo(e.target.files[0]);
					props.setContent(e.target.files[0]);
					getVideoSrc(e.target.files[0]);
				}}
				value={inputValue}
				accept={'video/*'}
			/>
			{!video
				? <label className={s.btn} htmlFor="upload">Загрузить видео</label>
				: <button
					className={s.btn}
					onClick={() => {
						setInputValue(undefined);
						setVideo(null);
						props.setContent(undefined);
						setVideoSrc('');
					}}
				>
					Удалить видео
				</button>
			}
		</div>
	);
};

export default connect(null, {setContent})(CreateVideo);