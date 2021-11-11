import React from "react";
import {connect} from "react-redux";
import {addFragment} from "../../../redux/createLessonReducer";
import FragmentsList from "./FragmentsList";
import {changePage, getMyFragments} from "../../../redux/myFragmentsReducer";
import Preloader from "../../Preloader/Preloader";

class FragmentListContainer extends React.Component {

    state = {
        fragments: []
    }

    setFragmentData = (fragment) => {
        if (this.props.lessonFragments.some(f => f.id === fragment.id)) {
            this.setState({
                fragments: this.state.fragments.filter(f => f.id !== fragment.id)
            })
        } else {
            this.setState({
                fragments: [
                    ...this.state.fragments,
                    fragment
                ]
            })
        }
    }

    addFragment = () => {
        this.props.addFragment(this.state.fragments);
    }

    componentDidMount() {
        this.props.getMyFragments(
            this.props.token,
            this.props.currentPage
        );
    };

    changePage = (page) => {
        this.props.changePage(
            this.props.token,
            page,
            this.props.searchTitle,
            this.props.searchType
        );
    };

    render() {
        if (this.props.isFetching) {
            return <Preloader size={200}/>;
        }
        return <FragmentsList {...this.props}
                              setModalActive={this.props.setModalActive}
                              changePage={this.changePage}
                              setFragmentData={this.setFragmentData}
                              addFragment={this.addFragment}
        />
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    myFragments: state.myFragments.fragments,
    lessonFragments: state.createLesson.fragments,
    currentPage: state.myFragments.currentPage,
    nextPage: state.myFragments.nextPage,
    prevPage: state.myFragments.prevPage,
    lastPage: state.myFragments.lastPage,
    pageSize: state.myFragments.pageSize,
    isFetching: state.myFragments.isFetching,
    searchTitle: state.myFragments.searchTitle,
    searchType: state.myFragments.searchType,
    title: state.createLesson.title
});

export default connect(mapStateToProps, {
    getMyFragments,
    changePage,
    addFragment
})(FragmentListContainer);