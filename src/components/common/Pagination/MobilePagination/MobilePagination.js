import React from "react";
import s from '../Pagination.module.css';

const createPagination = (pagesCount, handler, currentPage) => {
    const pages = [];
    if (pagesCount > 4) {
        if (currentPage > 2) {
            if (currentPage <= 3) {
                for (let i = 1; i <= currentPage + 1; i++) {
                    pages.push(<div key={i} onClick={() => handler(i)}
                                    className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
                    if (i === pagesCount) {
                        break;
                    }

                }
            } else if (currentPage === pagesCount) {
                for (let i = currentPage - 3; i <= currentPage; i++) {
                    pages.push(<div key={i} onClick={() => handler(i)}
                                    className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
                    if (i === pagesCount) {
                        break;
                    }
                }
            } else {
                for (let i = currentPage - 1; i <= currentPage + 2; i++) {
                    pages.push(<div key={i} onClick={() => handler(i)}
                                    className={`${s.page} ${currentPage === i && s.current}`}>{i}</div>);
                    if (i === pagesCount) {
                        break;
                    }
                }
            }
        } else {
            for (let i = 1; i <= 4; i++) {
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


const MobilePagination = (props) => {
    return (
        <div className={s.mobilePagination}>
            <div className={s.prevPage} onClick={() => props.handler(props.prevPage)}> </div>
            <div className={s.pages}>
                <div className={s.page} onClick={() => props.handler(1)}>...</div>
                {createPagination(props.lastPage, props.handler, props.currentPage)}
                <div className={s.page} onClick={() => props.handler(props.lastPage)}>...</div>
            </div>
            <div className={s.nextPage} onClick={() => props.handler(props.nextPage)}> </div>
        </div>
    );
};

export default MobilePagination