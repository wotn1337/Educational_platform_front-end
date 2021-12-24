import React, {useState} from "react";
import s from './Favorite.module.css'
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import HeaderWithToggle from "./HeaderWithToggle/HeaderWithToggle";


const Favorite = () => {
	const [favoriteType, setFavoriteType] = useState('lessons');
	const [otherType, setOtherType] = useState(false);
	const [other, setOther] = useState('fragments');
	const rusTypes = {'fragments': 'Фрагменты', 'lessons': 'Уроки'}

	return (
		<div className={s.content}>
			<HeaderWithToggle
				title={'Избранное'}
				setCurrent={setFavoriteType}
				current={favoriteType}
				other={other}
				setOther={setOther}
				showOther={otherType}
				setShowOther={setOtherType}
				rusPages={rusTypes}
			/>
			{favoriteType === 'fragments' &&
			<>
				<SearchBlockContainer page={'favorite'}/>
				<FragmentsListContainer page={'favorite'}/>
			</>
			}
			{favoriteType === 'lessons' &&
			<>
				<LessonSearchBlockContainer page={'favorite'}/>
				<LessonsListContainer page={'favorite'} />
			</>
			}
		</div>
	)
}

export default withoutAuthRedirectToAuthPage(Favorite);