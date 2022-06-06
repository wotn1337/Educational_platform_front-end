import React, {useEffect} from 'react'
import CreateGraphicDictation from "./CreateGraphicDictation";
import {connect} from "react-redux";
import {setColor, setLineWidth, setPoints, setSize, clearAllFields} from "../../../redux/gamesReducer";


const CreateGraphDictationContainer = (props) => {
	useEffect(() => {
		return props.clearAllFields
	})

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
	setPoints,
	setLineWidth,
	clearAllFields
})(CreateGraphDictationContainer)