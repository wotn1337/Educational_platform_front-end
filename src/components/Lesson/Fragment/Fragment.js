import React from 'react';
import s from './Fragment.module.css';
import {withRouter} from "react-router-dom";
import {fragmentTypes} from "../../../common/fragmentTypes";


const Fragment = ({fragment}) => {
	return (
		<div className={s.fragment}>
			<h3 className={s.title}>{fragment.title}</h3>
			{fragment.type === fragmentTypes.article &&
			<div className={s.article} dangerouslySetInnerHTML={{__html: fragment.content}}/>
			}
			{fragment.type === fragmentTypes.video &&
			<video src={fragment.content} controls={'controls'} className={s.video}/>
			}
			<div className={s.tagsAndAuthor}>
				<div>Здесь будут теги фрагмента, когда Никита будет возвращать их с бэка</div>
				<div className={s.author}>
					<span className={s.authorName}>{fragment.user_name}</span>
					<img src={fragment.avatar} alt="avatar" className={s.authorAvatar}/>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Fragment);