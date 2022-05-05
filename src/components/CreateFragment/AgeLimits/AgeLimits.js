import React, {useEffect} from 'react'
import s from './AgeLimits.module.css'
import {connect} from "react-redux";
import {getAgeLimits} from "../../../redux/ageLimitsReducer";
import Preloader from "../../../common/Preloader/Preloader";


const AgeLimits = ({ageLimits, isFetching, getAgeLimits, ageLimitId, setAgeLimit}) => {
	// Получить список возрастных цензов при вмонтировании компоненты
	useEffect(getAgeLimits, [])

	return (
		<div className={s.selectBlock}>
			<label htmlFor="age_limits" className={s.label}>Возраст:</label>
			{!isFetching
				? <select
					name="age_limits"
					id="age_limits"
					className={s.select}
					value={ageLimitId}
					onChange={e => setAgeLimit(e.target.value)}
				>
					{ageLimits.map(limit => (
						<option value={limit.id} key={limit.id}>{limit.text_context}</option>
					))}
				</select>
				: <div style={{width: '50px'}}><Preloader size={50}/></div>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	ageLimits: state.ageLimits.ageLimits,
	isFetching: state.ageLimits.isFetching
})

export default connect(mapStateToProps, {getAgeLimits})(AgeLimits)