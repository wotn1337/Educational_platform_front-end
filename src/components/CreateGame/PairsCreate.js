import React, {useState} from 'react';
import s from './PairsCreate.module.css';
import FragmentTitle from "../CreateFragment/FragmentTitle/FragmentTitle";

const PairsCreate = ({setContent, setGameType, ...props}) => {

	const [images, setImages] = useState([]);
	const [imagesSrc, setImagesSrc] = useState([]);
	const previews = imagesSrc.map(url => (
		<div className={s.preview}>
			<img src={url} className={s.image} alt="img"/>
		</div>
	));


	return (
		<>
			<FragmentTitle/>
			<section className={s.createImage}>
				<button className="backButton" onClick={() => setGameType(undefined)}/>
				<h3>Загрузите свои изображения</h3>
				{images.length ? <div className={s.previewBlock}>{previews}</div> :
					<div className={s.placeholder}>Здесь появятся выбранные изображения для игры</div>
				}
				<div className={s.uploadBlock}>
					<div className={s.plus}> </div>
					<input
						type="file" multiple
						accept={'image/*'}
						id={'image'}
						className={'hide'}
						onChange={e => {
							let urls = [];
							let tempImages = [];
							for (let i=0; i<e.target.files.length; i++) {
								tempImages.push(e.target.files[i]);
								urls.push(URL.createObjectURL(e.target.files[i]));
							}
							setImages([...tempImages]);
							setImagesSrc([...urls]);
							setContent([...tempImages]);
						}}
					/>
					<label htmlFor="image"
						   className={s.uploadBtn}>{images.length ? 'Выбрать другие изображения' : 'Загрузить изображения'}</label>
				</div>
			</section>
		</>
	);
};

export default PairsCreate;