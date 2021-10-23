import React from "react";
import s from './Preloader.module.css';
import preloaderGIF from '../../assets/img/preloader.gif';


const Preloader = (props) => {
	return (
		<img
			className={s.preloader}
			src={preloaderGIF}
			alt="preloader"
			width={props.size}
		/>
	);

};

export default Preloader;