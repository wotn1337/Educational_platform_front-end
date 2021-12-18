import React from 'react';
import s from './BlockedPage.module.css';


const BlockedPage = (props) => {
	return (
		<section className={'content'}>
			<div className={s.banner}>
				<h1 className={s.header}>Ошибка 403</h1>
				<p className={s.text}>К сожалению, вам отказано в доступе</p>
				<span className={s.sadSmile}>: (</span>
			</div>
		</section>
	);
};

export default BlockedPage;