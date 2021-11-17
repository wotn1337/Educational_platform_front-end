import React from 'react';
import s from './FragmentsList.module.css';
import FragmentCardContainer from "./FragmentCard/FragmentCardContainer";
import Pagination from "../../../common/Pagination/Pagination";



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
					<div style={{width: 'fit-content'}}>
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