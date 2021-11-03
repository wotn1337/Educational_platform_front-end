import React from 'react';
import CreateTest from "./CreateTest";
import {connect} from "react-redux";
import {
    changeAnswer,
    changeOption,
    changeQuestion, deleteQuestion,
    addAnswer,
    addQuestion
} from "../../redux/createTestReducer";

class CreateTestContainer extends React.Component {

    addQuestion = () => {
        let question = {
            question: '',
            option: 'Один вариант',
            answersCount: 1,
            answers: {id: 1, content: 'Вариант 1', isEdit: false, isSelected: false}
        }
        this.props.addQuestion(question)
    }

    render() {
        return (
            <>
                <CreateTest
                    {...this.props}
                    addQuestion={this.addQuestion}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.createTest.questions
});

export default connect(mapStateToProps, {
    changeOption,
    addQuestion,
    changeQuestion,
    addAnswer,
    changeAnswer,
    deleteQuestion
})(CreateTestContainer);