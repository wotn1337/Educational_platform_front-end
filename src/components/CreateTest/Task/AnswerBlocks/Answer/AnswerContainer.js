import React from 'react';
import {
    changeEditMode,
    changeSelectedMode, deleteAnswer
} from "../../../../../redux/createTestReducer";
import {connect} from "react-redux";
import Answer from "./Answer";

class AnswerContainer extends React.Component {

    toggleEditMode = (question_id, answer_id) => {
        this.props.changeEditMode(question_id, answer_id)
    }

    toggleSelectedMode = (question_id, answer_id) => {
        this.props.changeSelectedMode(question_id, answer_id)
    }

    deleteAnswer = (question_id, answer_id) => {
        this.props.deleteAnswer(question_id, answer_id)
    }

    render() {
        return (
            <Answer type={this.props.type}
                    questionId={this.props.questionId}
                    answer={this.props.answer}
                    changeAnswer={this.props.changeAnswer}
                    toggleEditMode={this.toggleEditMode}
                    toggleSelectedMode={this.toggleSelectedMode}
                    deleteAnswer={this.deleteAnswer}
            />
        )
    }
}


const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
    changeEditMode,
    changeSelectedMode,
    deleteAnswer
})(AnswerContainer);