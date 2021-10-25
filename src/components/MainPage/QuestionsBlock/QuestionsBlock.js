import React from "react";
import s from "./QuestionsBlock.module.css";
import Question from "./Question/Question";


const QuestionsBlock = () => {
	return (
		<div className={s.questionWrapper}>
			<Question
				question={'Как происходит обучение на нашей платформе?'}
				answer={'— Ребенок изучает уроки, каждый из которых состоит из отдельных видеофрагментов или ярких иллюстраций.'}
			/>
			<Question
				question={'Что можно найти на сайте?'}
				answer={'— В верхнем меню вы можете найти все основные страницы нашего сайта.\n' +
				'Перейдя во вкладку Каталог, вы сможете найти нужный вам урок с помощью фильтра по темам. А на странице Фрагменты будут находиться ваши сохраненные и любимые уроки.'}
			/>
		</div>
	);
}

export default QuestionsBlock;