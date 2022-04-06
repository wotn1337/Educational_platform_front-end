import React from "react";
import {connect} from "react-redux";
import AssociationPair from "./AssociationPair";

class AssociationsPairContainer extends React.Component {
    state = {
        oldLinks: this.props.oldLinks
    }
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
            <AssociationPair
                {...this.props}
                // oldLinks={this.state.oldLinks}
                // deleteImage={this.props.deleteImage}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin,
    pairs: state.games.associations
});

export default connect(mapStateToProps, {
    addAssociation,
    setAssociation,
    deleteAssociation
})
(AssociationsPairContainer);