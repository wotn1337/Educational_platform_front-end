import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {addFragment, changeFragmentTitle} from "../../redux/createLessonReducer";
import {changePage, getMyFragments} from "../../redux/myFragmentsReducer";


class CreateLessonContainer extends React.Component {

    render() {
        return <CreateLesson
            {...this.props}
        />;
    }
}

const mapStateToProps = (state) => ({
    title: state.createLesson.title,
    lessonFragments: state.createLesson.fragments
});

export default connect(mapStateToProps, {
    changeFragmentTitle,
    addFragment,
    getMyFragments,
    changePage
})(CreateLessonContainer);