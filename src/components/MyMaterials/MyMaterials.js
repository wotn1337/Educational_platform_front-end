import React from 'react';
import HeaderWithToggle from "../Favorite/HeaderWithToggle/HeaderWithToggle";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {togglePage} from "../../redux/catalogPagesReducer";


const MyMaterials = ({role, type, togglePage}) => {
	return (
		<section className={'content'}>
			{role !== 'student'
				? <HeaderWithToggle
					title={'Мои материалы'}
					type={type}
					toggle={togglePage}
					page={'myMaterials'}
				/>
				: <h1 className={'pageTitle'}>Мои уроки</h1>
			}

			{(type.current === 'fragments' && role !== 'student') &&
				<>
					<SearchBlockContainer page={'my-fragments'}/>
					<FragmentsListContainer page={'my-fragments'}/>
				</>
			}
			{(type.current === 'lessons' || role === 'student') &&
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
	type: state.catalogPages.myMaterials
});

export default compose(
	withoutAuthRedirectToAuthPage,
	connect(mapStateToProps, {togglePage}),
)(MyMaterials);