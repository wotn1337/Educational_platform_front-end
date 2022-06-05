import React from 'react'
import s from './Controls.module.css'


const Controls = ({width, height, setSize, color, setColor, lineWidth, setLineWidth}) => {
	const options = []
	for (let i = 1; i <= 10; i++) {
		options.push(<option value={i} key={i}>{i}</option>)
	}
	return (
		<div className={s.controls}>
			<label className={s.label} htmlFor="width">
				Ширина: <select
				className='input'
				name="width" id="width"
				value={width}
				onChange={(e) => setSize('width', +e.target.value)}
			>
				{options}
			</select>
			</label>
			<label className={s.label} htmlFor="height">
				Высота: <select
				className='input'
				name="height" id="height"
				value={height}
				onChange={(e) => setSize('height', +e.target.value)}
			>
				{options}
			</select>
			</label>
			<label className={s.label} htmlFor="line_width">
				Линия: <select
				className='input'
				name="line_width" id="line_width"
				value={lineWidth}
				onChange={(e) => setLineWidth(+e.target.value)}
			>
				{options}
			</select>
			</label>
			<label className={s.label} htmlFor="color">
				Цвет: <input
				className='input'
				style={{padding: '0'}}
				id='color'
				type="color"
				value={color}
				onChange={e => setColor(e.target.value)}
			/>
			</label>
		</div>
	)
}

export default Controls