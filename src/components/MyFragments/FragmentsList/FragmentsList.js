import React from 'react';
import FragmentCard from "./FragmentCard/FragmentCard";
import s from './FragmentsList.module.css';
import Pagination from "../../Pagination/Pagination";
import FragmentCardContainer from "./FragmentCard/FragmentCardContainer";


const FragmentsList = (props) => {
	const fragmentCards = props.fragments.map(fragment => (
		<FragmentCardContainer
			id={fragment.id}
			key={fragment.id}
			fragmentType={fragment.type}
			title={fragment.title}
			tags={fragment.tags}
			// changeFavorite={props.changeFavorite}
		/>
	));

	return (
		<>
			{fragmentCards.length > 0
				? <>
					<div className={s.fragmentsList}>{fragmentCards}</div>
					<div style={{width: '50%'}}>
						<Pagination
							handler={props.changePage}
							currentPage={props.currentPage}
							prevPage={props.prevPage}
							lastPage={props.lastPage}
							nextPage={props.nextPage}
						/>
					</div>
				</>
				: <div className={s.noFragments}>
					С такими параметрами фрагментов не найдено
					<div className={s.sadSmile}>: (</div></div>
			}
		</>
	);
};

export default FragmentsList;