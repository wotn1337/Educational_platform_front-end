import React from "react";
import s from './Preloader.module.css';
import preloaderGIF from '../../Stylesheets/preloader.gif';


const Preloader = (props) => {
	return (
		<img
			className={s.preloader}
			src={preloaderGIF}
			alt="preloader"
			width={props.width}
			height={props.height}
		/>
	);

};

export default Preloader;