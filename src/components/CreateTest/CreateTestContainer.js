import React from 'react';
import CreateTest from "./CreateTest";
import {connect} from "react-redux";
import {changeOption, changeQuestion, setQuestion} from "../../redux/createTestReducer";

class CreateTestContainer extends React.Component {
    addQuestion = () => {
        let question = {
            question: '',
            option: 'Один вариант',
            answers: ['Вариант 1', 'Вариант 2']
        }
        this.props.setQuestion(question)
    }

    changeOption = (id, option) => {
        this.props.changeOption(id, option);
    }

    changeQuestion = (id, question) => {
        this.props.changeQuestion(id, question);
    }

    render() {
        return (
            <>
                <CreateTest
                    {...this.props}
                    addQuestion={this.addQuestion}
                    changeOption={this.changeOption}
                    changeQuestion={this.changeQuestion}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.createTest.questions
});

export default connect(mapStateToProps, {
    changeOption,
    setQuestion,
    changeQuestion
})(CreateTestContainer);