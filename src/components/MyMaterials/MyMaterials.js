import React, {useState} from 'react';
import HeaderWithToggle from "../Favorite/HeaderWithToggle/HeaderWithToggle";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";


const MyMaterials = (props) => {
	const [current, setCurrent] = useState('fragments');
	const [showOther, setShowOther] = useState(false);
	const [other, setOther] = useState('lessons');
	const rusTypes = {'fragments': 'Фрагменты', 'lessons': 'Уроки'}
	return (
		<section className={'content'}>
			<HeaderWithToggle
				title={'Мои материалы'}
				setCurrent={setCurrent}
				current={current}
				other={other}
				setOther={setOther}
				showOther={showOther}
				setShowOther={setShowOther}
				rusPages={rusTypes}
			/>
			{current === 'fragments' &&
				<>
					<SearchBlockContainer page={'my-fragments'}/>
					<FragmentsListContainer page={'my-fragments'}/>
				</>
			}
			{current === 'lessons' &&
				<>
					<LessonSearchBlockContainer page={'my-lessons'}/>
					<LessonsListContainer page={'my-lessons'} />
				</>
			}
		</section>
	);
};

export default MyMaterials;