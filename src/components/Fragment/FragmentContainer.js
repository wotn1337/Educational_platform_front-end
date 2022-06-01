import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {
    addTag, changeFavorite,
    deleteFragment, setOldLinks,
    deleteTag,
    editFragment,
    getFragment, setAnnotation,
    setContent, setFon,
    setTitle, setTask, setAgeLimit
} from "../../redux/fragmentReducer";
import Preloader from "../../common/Preloader/Preloader";
import {returnTag} from "../../redux/allTagsReducer";
import {withRouter} from "react-router-dom";
import {clearAllFields, getAssociations, getPuzzles, getSequence} from "../../redux/gamesReducer";


class FragmentContainer extends React.Component {
    state = {
        id: this.props.match.params.id,
        isEdit: false,
        deleteErrorModal: false,
        oldLinks: this.props.oldLinks
    }

    componentDidMount() {
        this.props.getFragment(this.state.id).then(() => {
            if (this.props.type === 'game') {
                if (this.props.content.gameType === 'pairs') {
                    this.props.getSequence(this.props.content.images)
                } else if (this.props.content.gameType === 'matchmaking') {
                    this.props.getAssociations(this.props.content.images);
                } else if (this.props.content.gameType === 'sequences') {
                    this.props.getSequence(this.props.content.images)
                } else if (this.props.content.gameType === 'puzzles') {
                    this.props.getPuzzles(this.props.content.images)
                }
            }
        });

    }

    componentWillUnmount() {
        this.props.clearAllFields();
    }

    openDeleteErrorModal = () => {
        this.setState({deleteErrorModal: true});
    }

    closeDeleteErrorModal = () => {
        this.setState({deleteErrorModal: false});
    }

    toggleIsEdit = () => {
        this.setState({isEdit: !this.state.isEdit});
    }

    deleteFragment = () => {
        this.props.deleteFragment(this.state.id, this.props.history.goBack, this.openDeleteErrorModal);
    }

    editFragment = () => {
        let content = [];
        let metaImagesData
        if (this.props.gameType==='matchmaking') {
            metaImagesData = this.props.metaImagesData.map(p => p.pair)
            for (const pair of this.props.associations) {
                for (const image of pair.content) {
                    if (typeof image.url !== 'string') {
                        content.push(image.url)
                    }
                }
            }
            //content = this.props.associations.map(a => [a.content[0].url, a.content[1].url]);
        } else if (this.props.gameType==='sequences' || this.props.gameType==='pairs') {
            content = {images: this.props.sequence.filter(a => typeof a.content !== 'string').map(c => c.content)};
        }else if (this.props.gameType==='puzzles') {
            content = this.props.puzzles;
        } else content = this.props.content;
        this.props.editFragment(
            this.state.id,
            this.props.type,
            this.props.title,
            content,
            this.props.tagsIds,
            this.props.annotation,
            this.props.fon,
            this.state.oldLinks,
            this.props.gameType,
            this.props.task,
            this.props.gameType==='matchmaking' ? metaImagesData : this.props.metaImagesData,
            this.props.ageLimitId
        )
            .then(() => {
                this.toggleIsEdit();
                this.props.getFragment(this.state.id).then(() => {
                    if (this.props.content.gameType === 'pairs') {
                        this.props.getSequence(this.props.content.images)
                    } else if (this.props.content.gameType === 'matchmaking') {
                        this.props.getAssociations(this.props.content.images);
                    } else if (this.props.content.gameType === 'sequences') {
                        this.props.getSequence(this.props.content.images)
                    } else if (this.props.content.gameType === 'puzzles') {
                        this.props.getPuzzles(this.props.content.images)
                    }
                });
            });
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader size={200}/>
        }

        return <Fragment
            {...this.props}
            {...this.state}
            deleteFragment={this.deleteFragment}
            toggleIsEdit={this.toggleIsEdit}
            editFragment={this.editFragment}
            openDeleteErrorModal={this.openDeleteErrorModal}
            closeDeleteErrorModal={this.closeDeleteErrorModal}
            deleteImage={this.deleteImage}
        />;
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    role: state.auth.role,
    title: state.fragment.title,
    content: state.fragment.content,
    annotation: state.fragment.annotation,
    type: state.fragment.type,
    creator: state.fragment.creator,
    creatorId: state.fragment.creatorId,
    creatorAvatar: state.fragment.creatorAvatar,
    isFetching: state.fragment.isFetching,
    tags: state.fragment.tags,
    tagsIds: state.fragment.tagsIds,
    oldLinks: state.fragment.oldLinks,
    favorite: state.fragment.favorite,
    favoriteFetching: state.fragment.favoriteFetching,
    fon: state.fragment.fon,
    deleteError: state.fragment.deleteError,
    associations: state.games.associations,
    sequence: state.games.sequence,
    puzzles: state.games.puzzles,
    gameType: state.fragment.gameType,
    task: state.fragment.task,
    metaImagesData: state.games.metaImagesData,
    ageLimitId: state.fragment.ageLimitId
});

export default compose(
    connect(mapStateToProps, {
        getFragment,
        deleteFragment,
        editFragment,
        setTitle,
        setContent,
        deleteTag,
        addTag,
        returnTag,
        changeFavorite,
        setAnnotation,
        setFon,
        setOldLinks,
        getAssociations,
        getSequence,
        getPuzzles,
        setTask,
        clearAllFields,
        setAgeLimit,
    }),
    withoutAuthRedirectToAuthPage,
    withRouter
)(FragmentContainer);