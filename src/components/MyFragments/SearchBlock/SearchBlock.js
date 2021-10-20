import React from "react";
import s from './SearchBlock.module.css'


const SearchBlock = (props) => {
	return (
		<div>
			<div className={s.title}>
				Всего {props.fragments} фрагментов <span className={s.totalCount}>из {props.totalFragmentsCount}</span>
			</div>
			<div className={s.inputBlock}>
				<div className={s.searchInputBlock}>
					<input type="text" placeholder={'Поиск'} className={s.searchInput}/>
					<button className={s.searchButton}>Поиск</button>
				</div>
				<select name="type" id="type">
					<option disabled style={{display: 'none'}}>Тип фрагмента</option>
					<option value="article">Статья</option>
					<option value="video">Видео</option>
					<option value="test">Тест</option>
				</select>
			</div>
		</div>
	);
}

export default SearchBlock;