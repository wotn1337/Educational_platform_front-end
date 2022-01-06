import React, {useState} from 'react';
import s from '../Fragment.module.css';


const VideoFragment = ({video, isEdit, setVideo}) => {
	const [videoSrc, setVideoSrc] = useState(typeof video === 'string' ? video : URL.createObjectURL(video));
	return (
		<>
			<video src={videoSrc} controls={'controls'} className={s.video}/>
			{isEdit &&
				<>
					<input
						type="file"
						accept={'video/*'}
						id={'video'}
						className={'hide'}
						onChange={e => {
							setVideoSrc(URL.createObjectURL(e.target.files[0]));
							setVideo(e.target.files[0]);
						}}
					/>
					<div style={{margin: '10px auto 0', width: 'fit-content'}}>
						<label htmlFor="video" className={'uploadBtn'}>Изменить видео</label>
					</div>
				</>
			}
		</>
	);
};

export default VideoFragment;