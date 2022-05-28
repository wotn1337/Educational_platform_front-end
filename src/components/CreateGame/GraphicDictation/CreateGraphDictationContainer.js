import React from 'react'
import CreateGraphicDictation from "./CreateGraphicDictation";
import {connect} from "react-redux";
import {addPoint, clearPoints, deletePoint, setColor, setLineWidth, setSize} from "../../../redux/gamesReducer";


const CreateGraphDictationContainer = (props) => {
	return (
		<CreateGraphicDictation {...props}/>
	)
}

const mapStateToProps = (state) => ({
	width: state.games.graph.width,
	height: state.games.graph.height,
	color: state.games.graph.color,
	points: state.games.graph.points,
	lineWidth: state.games.graph.lineWidth
})

export default connect(mapStateToProps, {
	setSize,
	setColor,
	addPoint,
	deletePoint,
	clearPoints,
	setLineWidth
})(CreateGraphDictationContainer)