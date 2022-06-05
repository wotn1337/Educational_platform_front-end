import React from 'react'
import Controls from "./Controls/Controls";
import GraphDictation from "../../Games/GraphDictation/GraphDictation";

const CreateGraphicDictation = ({width, height, pointSize = 20, cellSize = 100, ...props}) => {
	return (
		<>
			<Controls
				width={width}
				height={height}
				setSize={props.setSize}
				setColor={props.setColor}
				color={props.color}
				lineWidth={props.lineWidth}
				setLineWidth={props.setLineWidth}
			/>
			<GraphDictation
				width={width}
				height={height}
				cellSize={cellSize}
				pointSize={pointSize}
				color={props.color}
				lineWidth={props.lineWidth}
				setPoints={props.setPoints}
				points={props.points}
			/>
		</>
	)
}

export default CreateGraphicDictation