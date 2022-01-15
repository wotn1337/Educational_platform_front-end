import React from 'react';
import HeaderWithToggle from "../Favorite/HeaderWithToggle/HeaderWithToggle";
import SearchBlockContainer from "../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../MyFragments/FragmentsList/FragmentsListContainer";
import LessonSearchBlockContainer from "./lessonsCatalog/LessonSearchBlock/LessonSearchBlockContainer";
import LessonsListContainer from "./lessonsCatalog/LessonsList/LessonsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {togglePage} from "../../redux/catalogPagesReducer";


const Catalog = ({type, togglePage}) => {
	return (
		<section className={'content'}>
			<HeaderWithToggle
				title={'Каталог'}
				type={type}
				toggle={togglePage}
				page={'catalog'}
			/>
			{type.current === 'fragments' &&
				<>
					<SearchBlockContainer page={'catalog'}/>
					<FragmentsListContainer page={'catalog'}/>
				</>
			}
			{type.current === 'lessons' &&
				<>
					<LessonSearchBlockContainer page={'catalog'}/>
					<LessonsListContainer page={'catalog'} />
				</>
			}
		</section>
	);
};

const mapStateToProps = (state) => ({
	type: state.catalogPages.catalog
});

export default compose(
	withoutAuthRedirectToAuthPage,
	connect(mapStateToProps, {togglePage})
)(Catalog);