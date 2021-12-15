import React, {useState} from 'react';
import s from './CreateImage.module.css';
import {setContent} from "../../../redux/createFragmentReducer";
import {connect} from "react-redux";


const CreateImage = ({setContent, ...props}) => {
	const [image, setImage] = useState(undefined);
	const [imageSrc, setImageSrc] = useState(undefined);
	const getImgSrc = (newImg) => {
		const reader = new FileReader();
		reader.readAsDataURL(newImg || image);
		reader.onloadend = function () {
			setImageSrc([reader.result]);
		}
	}

	return (
		<section className={s.createImage}>
			{image
				? <img src={imageSrc} alt="fragment" className={s.preview}/>
				: <div className={s.placeholder}>Здесь будет ваше изображение</div>
			}
			<input
				type="file"
				accept={'image/*'}
				id={'image'}
				className={'hide'}
				onChange={e => {
					setContent(e.target.files[0]);
					setImage(e.target.files[0]);
					getImgSrc(e.target.files[0]);
				}}
			/>
			<label htmlFor="image" className={'uploadBtn'}>{image ? 'Выбрать другое изображение' : 'Загрузить изображение'}</label>
		</section>
	);
};

export default connect(null, {setContent})(CreateImage);