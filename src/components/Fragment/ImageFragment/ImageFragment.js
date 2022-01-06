import React, {useState} from 'react';
import s from '../Fragment.module.css';
import i from './ImageFragment.module.css';


const ImageFragment = ({annotation, image, isEdit, setImage, setAnnotation}) => {
	const [imageSrc, setImageSrc] = useState(typeof image === 'string' ? image : URL.createObjectURL(image));

	return (
		<>
			<img src={imageSrc} alt="fragment" className={s.image}/>
			{isEdit &&
			<>
				<input
					type="file"
					accept={'image/*'}
					id={'image'}
					className={'hide'}
					onChange={e => {
						setImageSrc(URL.createObjectURL(e.target.files[0]));
						setImage(e.target.files[0]);
					}}
				/>
				<div style={{margin: '0 auto 10px', width: 'fit-content'}}>
					<label htmlFor="image" className={'uploadBtn'}>Изменить изображение</label>
				</div>
			</>
			}
			{isEdit
				? <textarea className={`input ${i.input}`} value={annotation} onChange={e => setAnnotation(e.target.value)}/>
				: <p className={s.annotation}>{annotation}</p>
			}
		</>
	);
};

export default ImageFragment;