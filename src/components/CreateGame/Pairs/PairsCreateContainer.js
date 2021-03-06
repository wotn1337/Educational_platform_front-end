import React from "react";
import {connect} from "react-redux";
import PairsCreate from "./PairsCreate";

class PairsCreateContainer extends React.Component {
    render() {
        return (
            <PairsCreate
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    pairs: state.games.pairs,
});

export default connect(mapStateToProps, {})(PairsCreateContainer);