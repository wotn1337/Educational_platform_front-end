import React, {useState} from 'react';
import s from './PairsCreate.module.css';

const PairsCreate = ({setContent, setGameType, pairs, ...props}) => {
	let oldContent;
	const [images, setImages] = useState([]);
	const [imagesSrc, setImagesSrc] = useState([]);
	const previews = imagesSrc.map(url => (
		<div className={s.preview}>
			<img src={url} className={s.image} alt="img"/>
		</div>
	));
	if (props.isEdit) {
		oldContent = pairs?.map(image => (
			<div className={s.preview}>
				<div className={s.delete} onClick={() => props.deleteImage(image.id)}>Удалить</div>
				<img src={image.url} className={s.image} alt="img"/>
			</div>
		));
	}


	return (
		<>
			<section className={s.createGame}>
				{!props.isEdit && <h3>Загрузите свои изображения</h3>}
				{props.isEdit && <div className={s.previewBlock}>{oldContent}</div>}
				{images.length ? <div className={s.previewBlock}>{previews}</div> :
					<div className={s.placeholder}>{props.isEdit ? 'Выберите новые изображения'
						: 'Здесь появятся выбранные изображения для игры'}</div>
				}
					<input
						type="file" multiple
						accept={'image/*'}
						id={'image'}
						className={'hide'}
						onChange={e => {
							let urls = [];
							let tempImages = [];
							for (let i = 0; i < e.target.files.length; i++) {
								tempImages.push(e.target.files[i]);
								urls.push(URL.createObjectURL(e.target.files[i]));
							}
							setImages([...tempImages]);
							setImagesSrc([...urls]);
							setContent({...props.content, images: [...tempImages]});
						}}
					/>
					<label htmlFor="image" className={s.uploadBtn}>
						<div className={s.plus}/>
						{images.length ? 'Выбрать другие изображения' : 'Загрузить изображения'}
					</label>
			</section>
		</>
	);
};

export default PairsCreate;