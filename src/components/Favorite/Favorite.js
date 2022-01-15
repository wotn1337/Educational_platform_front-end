import React from "react";
import s from './Favorite.module.css'
import LessonSearchBlockContainer from "../CatalogPage/lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "../CatalogPage/lessonsCatalog/LessonsList/LessonsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import HeaderWithToggle from "./HeaderWithToggle/HeaderWithToggle";
import {compose} from "redux";
import {connect} from "react-redux";
import {togglePage} from "../../redux/catalogPagesReducer";


const Favorite = ({type, togglePage}) => {
	return (
		<div className={s.content}>
			<HeaderWithToggle
				title={'Избранное'}
				type={type}
				toggle={togglePage}
				page={'favorite'}
			/>
			{type.current === 'fragments' &&
			<>
				<SearchBlockContainer page={'favorite'}/>
				<FragmentsListContainer page={'favorite'}/>
			</>
			}
			{type.current === 'lessons' &&
			<>
				<LessonSearchBlockContainer page={'favorite'}/>
				<LessonsListContainer page={'favorite'} />
			</>
			}
		</div>
	)
}
export const mapStateToProps = (state) => ({
	role: state.auth.role,
	type: state.catalogPages.favorite
});

export default compose(
	withoutAuthRedirectToAuthPage,
	connect(mapStateToProps, {togglePage}),
)(Favorite);