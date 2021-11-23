import React from 'react';
import s from './Fragment.module.css';
import {withRouter} from "react-router-dom";
import {fragmentTypes} from "../../../common/fragmentTypes";


const Fragment = ({fragment}) => {
	return (
		<div>
			<h3>{fragment.title}</h3>
			{fragment.type === fragmentTypes.article &&
				<div dangerouslySetInnerHTML={{__html: fragment.content}}/>
			}
		</div>
	);
};

export default withRouter(Fragment);