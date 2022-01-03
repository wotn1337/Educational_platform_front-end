import React, {useEffect, useState} from 'react';
import s from './UploadFon.module.css';


const UploadFon = ({type, fon, setFon}) => {
	const [fonSrc, setFonSrc] = useState(undefined);

	useEffect(() => {
		return () => {
			setFonSrc(undefined);
			setFon(undefined);
		}
	}, []);

	return (
		<div style={{marginBottom: '35px'}}>
			<h3>Обложка вашего {type === 'lesson' ? 'урока' : 'фрагмента'}</h3>
			<div className={s.fonBlock}>
				{fon && <img src={fonSrc} alt={`${type} preview`} className={s.fon}/>}
				<label className={'btn'} htmlFor="upload">{fon ? 'Выбрать другую обложку' : 'Загрузить обложку'}</label>
				<input className={'hide'} type='file' id='upload' accept={'image/*'} onChange={e => {
					setFon(e.target.files[0]);
					setFonSrc(URL.createObjectURL(e.target.files[0]));
				}}/>
			</div>
		</div>
	);
};

export default UploadFon;