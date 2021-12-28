import React, {useState} from 'react';
import HeaderWithToggle from "../Favorite/HeaderWithToggle/HeaderWithToggle";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import LessonSearchBlockContainer from "./lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "./lessonsCatalog/LessonsList/LessonsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const Catalog = () => {
	const [current, setCurrent] = useState('lessons');
	const [showOther, setShowOther] = useState(false);
	const [other, setOther] = useState('fragments');
	const rusTypes = {'fragments': 'Фрагменты', 'lessons': 'Уроки'}
	return (
		<section className={'content'}>
			<HeaderWithToggle
				title={'Каталог'}
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
					<SearchBlockContainer page={'catalog'}/>
					<FragmentsListContainer page={'catalog'}/>
				</>
			}
			{current === 'lessons' &&
				<>
					<LessonSearchBlockContainer page={'catalog'}/>
					<LessonsListContainer page={'catalog'} />
				</>
			}
		</section>
	);
};

export default compose(
	withoutAuthRedirectToAuthPage,
	withRouter
)(Catalog);