import React from "react";
import s from './Preloader.module.css';
import preloaderGIF from '../../assets/img/preloader.gif';


const Preloader = ({size}) => {
	return (
		<img
			className={s.preloader}
			src={preloaderGIF}
			alt="preloader"
			width={size}
			height={size}
		/>
	);
};

export default Preloader;