import React, {useState} from 'react';
import HeaderWithToggle from "../Favorite/HeaderWithToggle/HeaderWithToggle";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";


const MyMaterials = ({role}) => {
	const [current, setCurrent] = useState('fragments');
	const [showOther, setShowOther] = useState(false);
	const [other, setOther] = useState('lessons');
	const rusTypes = {'fragments': 'Фрагменты', 'lessons': 'Уроки'}
	return (
		<section className={'content'}>
			{role !== 'student'
				? <HeaderWithToggle
					title={'Мои материалы'}
					setCurrent={setCurrent}
					current={current}
					other={other}
					setOther={setOther}
					showOther={showOther}
					setShowOther={setShowOther}
					rusPages={rusTypes}
				/>
				: <h1 className={'pageTitle'}>Мои уроки</h1>
			}

			{(current === 'fragments' && role !== 'student') &&
				<>
					<SearchBlockContainer page={'my-fragments'}/>
					<FragmentsListContainer page={'my-fragments'}/>
				</>
			}
			{(current === 'lessons' || role === 'student') &&
				<>
					<LessonSearchBlockContainer page={'my-lessons'}/>
					<LessonsListContainer page={'my-lessons'}/>
				</>
			}
		</section>
	);
};
export const mapStateToProps = (state) => ({
	role: state.auth.role,
});

export default compose(
	withoutAuthRedirectToAuthPage,
	connect(mapStateToProps, {})
)(MyMaterials);