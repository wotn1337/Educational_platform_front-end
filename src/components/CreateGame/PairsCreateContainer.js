import React from "react";
import {connect} from "react-redux";
import PairsCreate from "./PairsCreate";

class PairsCreateContainer extends React.Component {
    // state = {
    //     oldLinks: this.props.oldLinks
    // }
    //
    // componentDidMount() {
    //     this.setState({oldLinks: this.props.content})
    // }
    //
    // deleteImage = (link) => {
    //     //this.props.deleteImage(link);
    //     this.setState({oldLinks: this.state.oldLinks.filter(l => l !== link)});
    // }

    render() {
        return (
            <PairsCreate
                {...this.props}
                // oldLinks={this.state.oldLinks}
                // deleteImage={this.props.deleteImage}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, {})(PairsCreateContainer);