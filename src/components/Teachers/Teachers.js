import React from 'react';
import s from './Teachers.module.css';
import Pagination from "../../common/Pagination/Pagination";
import avatarPlaceholder from '../../assets/img/profile/teacherProfile.svg';
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";


const Teachers = (props) => {
	const teachersCards = props.teachers.map(teacher => (
		<NavLink to={`profile/${teacher.id}`} className={s.teacherCard} key={teacher.id}>
			<div className={s.avatar} style={{backgroundImage: `url("${teacher.avatar || avatarPlaceholder}")`}}/>
			<span className={s.name}>{teacher.name}</span>
			<div>
				<span className={s.countTitle}>Фрагменты: <span
                    className={s.count}>{teacher.fragments_count}</span></span>
                <span className={s.countTitle}>Уроки: <span
                    className={s.count}>{teacher.lessons_count}</span></span>
            </div>
        </NavLink>
    ));

    return (
        <section className={s.teachersWrapper}>
            <div className={s.header}>
                <h1 className={'pageTitle'}>Преподаватели</h1>
                <div className={s.search}>
                    <input
                        className={s.searchName}
                        type="text"
                        value={props.searchName}
                        onChange={e => props.setSearchName(e.target.value)}
                        placeholder={'Имя преподавателя'}
                        onKeyUp={e => {
                            if (e.code === 'Enter') {
                                props.search();
                            }
                        }}
                    />
                    <button className={s.searchButton} onClick={props.search}/>
                </div>
            </div>
            {props.isFetching && <Preloader size={200}/>}
            {(props.teachers.length === 0 && !props.isFetching) &&
            <div className={s.noTeachers}>
                Преподаватели не найдены
                <div className={s.sadSmile}>: (</div>
            </div>
            }
	        {!props.isFetching &&
		        <>
			        <div className={s.teachers}>{teachersCards}</div>
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
			}
        </section>
    );
};

export default Teachers;