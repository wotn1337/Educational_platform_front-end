import s from './Fragment.module.css';
import {withRouter} from "react-router-dom";
import {fragmentTypes} from "../../../common/fragmentTypes";
import Author from "../Author/Author";
import {useEffect} from "react";


const Fragment = ({fragment, toggleFavorite, toggleCurrentFragmentFavorite, setCurrentFragment}) => {
	const toggleFragmentFavorite = () => {
		toggleFavorite(fragment.id)
			.then(() => toggleCurrentFragmentFavorite());
	};

	useEffect(() => {
		return () => setCurrentFragment(undefined);
	}, [])

	return (
		<div className={s.fragment}>
			<button
				className={`addToFavorite ${fragment.favourite ? 'inFavorite' : 'notInFavorite'} ${s.favoriteButton}`}
				onClick={toggleFragmentFavorite}
			/>
			<h2 className={s.title}>{fragment.title}</h2>
			<div className={s.content}>
				{fragment.type === fragmentTypes.article &&
					<div className={s.article} dangerouslySetInnerHTML={{__html: fragment.content}}/>
				}
				{fragment.type === fragmentTypes.video &&
					<video src={fragment.content} controls={'controls'} className={s.video}/>
				}
				{fragment.type === fragmentTypes.image &&
					<>
					<div className={s.image}><img src={fragment.content} alt="fragment"/></div>
						<p>{fragment.annotation}</p>
					</>
				}
			</div>
			<Author name={fragment.user_name} id={fragment.user_id} avatar={fragment.user_avatar}/>
		</div>
	);
};

export default withRouter(Fragment);