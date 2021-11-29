import React, {useState} from "react";
import s from './Favorite.module.css'
import FavoriteListContainer from "./FavoriteList/FavoriteListContainer";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";
import selectArrow from "../../assets/img/selectArrow.svg";
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import FavoriteLessonsContainer from "./FavoriteList/FavoriteLessonsContainer";

const Favorite = () => {
	const [favoriteType, setFavoriteType] = useState('fragments');
	const [otherType, setOtherType] = useState(false);
	const rusTypes = {'fragments': 'Фрагменты', 'lessons': 'Уроки'}

	return (
		<div className={s.content}>
			<div className={s.titleBlock}>
				<h1 className={'pageTitle'}>Избранное:</h1>
				<div
					className={s.select}
					onMouseEnter={() => setOtherType(true)}
					onMouseLeave={() => setOtherType(false)}
				>
					<div className={s.selectHead}>
						{rusTypes[favoriteType]}
						<img src={selectArrow} alt="select arrow" className={s.arrow}/>
					</div>
					{otherType &&
						<div className={s.otherType} onClick={() => setFavoriteType(favoriteType === 'fragments' ? 'lessons' : 'fragments')}>
							{favoriteType === 'fragments' ? rusTypes['lessons'] : rusTypes['fragments']}
						</div>
					}
				</div>
			</div>
			{favoriteType === 'fragments' &&
			<>
				<SearchBlockContainer/>
				<FavoriteListContainer/>
			</>
			}
			{favoriteType === 'lessons' &&
			<>
				<LessonSearchBlockContainer />
				<FavoriteLessonsContainer />
			</>
			}
		</div>
	)
}

export default Favorite;