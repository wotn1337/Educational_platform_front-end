import React from "react";
import s from './Pagination.module.css';
import MobilePagination from "./MobilePagination/MobilePagination";

const createPagination = (pagesCount, handler, currentPage) => {
	const pages = [];
	if (pagesCount > 10) {
		if (currentPage > 2) {
			if (currentPage < 6) {
				for (let i = 1; i <= currentPage + 5; i++) {
					pages.push(<div key={i} onClick={() => handler(i)}
					                className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
					if (i === pagesCount) {
						break;
					}

				}
			} else if (currentPage === pagesCount) {
				for (let i = currentPage - 9; i <= currentPage; i++) {
					pages.push(<div key={i} onClick={() => handler(i)}
					                className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
					if (i === pagesCount) {
						break;
					}
				}
			} else {
				for (let i = currentPage - 4; i <= currentPage + 5; i++) {
					pages.push(<div key={i} onClick={() => handler(i)}
					                className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
					if (i === pagesCount) {
						break;
					}
				}
			}
		} else {
			for (let i = 1; i <= 10; i++) {
				pages.push(<div key={i} onClick={() => handler(i)}
				                className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
				if (i === pagesCount) {
					break;
				}
			}
		}
	} else {
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(<div key={i} onClick={() => handler(i)}
			                className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
		}
	}
	return pages;
};


const Pagination = (props) => {
	return (
		<>
			<div className={s.pagination}>
				<div className={s.prevPage} onClick={() => props.handler(props.prevPage)}> </div>
				<div className={s.pages}>
					<div className={s.page} onClick={() => props.handler(1)}>...</div>
					{createPagination(props.lastPage, props.handler, props.currentPage)}
					<div className={s.page} onClick={() => props.handler(props.lastPage)}>...</div>
				</div>
				<div className={s.nextPage} onClick={() => props.handler(props.nextPage)}> </div>
			</div>
			<MobilePagination
				handler={props.handler}
				currentPage={props.currentPage}
				prevPage={props.prevPage}
				lastPage={props.lastPage}
				nextPage={props.nextPage}/>
		</>
	);
};

export default Pagination