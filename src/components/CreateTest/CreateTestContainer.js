import React from 'react';
import Task from "./Task/Task";
import CreateTest from "./CreateTest";

class CreateTestContainer extends React.Component {
    state = {
        taskCount: 1
    }

    onAddTask = () => {
        this.setState({
            taskCount: this.state.taskCount + 1
        });
    }

    render() {
        const children = [];
        for (let i = 0; i < this.state.taskCount; i += 1) {
            children.push(
                <Task/>
            );
        }

        return (
            <>
                <CreateTest children={children}
                            addTask={this.onAddTask}
                />
            </>
        )
    }
}

export default CreateTestContainer;