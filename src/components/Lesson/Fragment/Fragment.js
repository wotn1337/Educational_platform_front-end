import s from './Fragment.module.css';
import {withRouter} from "react-router-dom";
import {fragmentTypes} from "../../../common/fragmentTypes";
import Author from "../Author/Author";
import GameContainer from "../../Games/GameContainer/GameContainer";
import React from "react";


const Fragment = ({fragment, toggleFavorite, toggleCurrentFragmentFavorite, setCurrentFragment, fragmentsCount}) => {
	const toggleFragmentFavorite = () => {
		toggleFavorite(fragment.id)
			.then(() => toggleCurrentFragmentFavorite());
	};

	return (
		<div className={s.fragment}>
			<div className={s.main}>
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
					{fragment.type === fragmentTypes.game &&
						<GameContainer
							content={fragment.content}
							cardSize={180}
							inLesson={true}
							isLastFragmentInLesson={fragment.order === fragmentsCount}
							toNextFragment={() => setCurrentFragment(fragment.order)}
						/>
					}
				</div>
			</div>
			<Author name={fragment.user_name} id={fragment.user_id} avatar={fragment.user_avatar}/>
		</div>
	);
};

export default withRouter(Fragment);