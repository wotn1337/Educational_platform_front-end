import React from 'react';
import s from './Fragment.module.css';
import {withRouter} from "react-router-dom";
import {fragmentTypes} from "../../../common/fragmentTypes";
import Author from "../Author/Author";


const Fragment = ({fragment}) => {
	return (
		<div className={s.fragment}>
			<h2 className={s.title}>{fragment.title}</h2>
			<div className={s.content}>
				{fragment.type === fragmentTypes.article &&
					<div className={s.article} dangerouslySetInnerHTML={{__html: fragment.content}}/>
				}
				{fragment.type === fragmentTypes.video &&
					<video src={fragment.content} controls={'controls'} className={s.video}/>
				}
				{fragment.type === fragmentTypes.image &&
					<div className={s.image}><img src={fragment.content} alt="fragment"/></div>
				}
			</div>
			<Author name={fragment.user_name} avatar={fragment.user_avatar}/>
		</div>
	);
};

export default withRouter(Fragment);