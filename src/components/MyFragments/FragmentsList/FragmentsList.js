import React from 'react';
import FragmentCard from "./FragmentCard/FragmentCard";
import s from './FragmentsList.module.css';
import Pagination from "../../Pagination/Pagination";


const FragmentsList = (props) => {
	const fragmentCards = props.fragments.map(fragment => (
		<FragmentCard key={fragment.id} fragmentType={fragment.type} title={fragment.title}/>
	));

	return (
		<>
			<div className={s.fragmentsList}>
				{fragmentCards}
			</div>
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
	);
};

export default FragmentsList;