import React, {useState} from 'react';
import s from './CreateImage.module.css';
import {setAnnotation, setContent} from "../../../redux/createFragmentReducer";
import {connect} from "react-redux";


const CreateImage = ({setContent, annotation, setAnnotation, ...props}) => {
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
		<>
			<div className={s.annotation}>
				<h3>Описание изображения</h3>
				<textarea className={`textarea ${s.annotationText}`} value={annotation} onChange={e => setAnnotation(e.target.value)}/>
			</div>
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
				<label htmlFor="image"
				       className={'uploadBtn'}>{image ? 'Выбрать другое изображение' : 'Загрузить изображение'}</label>
			</section>
		</>
	);
};

const mapStateToProps = (state) => ({
	annotation: state.createFragment.annotation
});

export default connect(mapStateToProps, {setContent, setAnnotation})(CreateImage);