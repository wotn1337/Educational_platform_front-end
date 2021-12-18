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
            isFavorite={fragment.favourite}
            tags={fragment.tags}
            fon={fragment.fon}
            content={fragment.content}
        />
    ));

    return (
        <>
            {fragmentCards.length > 0
                ? <>
                    <div className={s.fragmentsList}>{fragmentCards}</div>
                    {props.lastPage > 1 &&
                        <div className={s.pagination}>
                            <Pagination
                                handler={props.changePage}
                                currentPage={props.currentPage}
                                prevPage={props.prevPage}
                                lastPage={props.lastPage}
                                nextPage={props.nextPage}
                            />
                        </div>
                    }
                </>
                : <div className={s.noFragments}>
                    С такими параметрами фрагментов не найдено
                    <div className={s.sadSmile}>: (</div></div>
            }
        </>
    );
};

export default FragmentsList;