import React from "react";
import {connect} from 'react-redux';
import {changeBlackListPage, getBlockedUsers, unblockUser} from "../../../redux/adminReducer";
import BlackList from "./BlackList";


class BlackListContainer extends React.Component {
    componentDidMount() {
        this.props.getBlockedUsers(this.props.token, this.props.currentPage);
    }

    changePage = (page) => {
        this.props.changeBlackListPage(this.props.token, page);
    }

    unblockUser = (id) => {
        this.props.unblockUser(this.props.token, id);
    }

    render() {
        return <BlackList {...this.props} changePage={this.changePage} unblockUser={this.unblockUser}/>;
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    users: state.admin.blackList.users,
    totalUsersCount: state.admin.blackList.totalUsersCount,
    currentPage: state.admin.blackList.currentPage,
    pageSize: state.admin.blackList.pageSize,
    isFetching: state.admin.blackList.isFetching,
    prevPage: state.admin.blackList.prevPage,
    nextPage: state.admin.blackList.nextPage,
    lastPage: state.admin.blackList.lastPage
});

export default connect(mapStateToProps, {
    getBlockedUsers,
    changeBlackListPage,
    unblockUser
})(BlackListContainer);