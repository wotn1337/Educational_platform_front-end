import React from "react";
import s from "./StepsBlock.module.css";
import Step from "./Step/Step";
import checkList from '../../../assets/img/mainPage/checklist.png';
import choose from '../../../assets/img/mainPage/choose.png';
import evaluation from '../../../assets/img/mainPage/evaluation.png';
import love from '../../../assets/img/mainPage/love.png';


const StepsBlock = () => {
	return (
		<div className={s.stepsBlock}>
			<div className={s.stepsBlockWrapper}>
				<p className={s.title}>Начни сейчас!</p>
				<div className={s.steps}>
					<Step
						image={checkList}
						title={'ШАГ 1 — Регистрация'}
						text={'Первым делом тебе нужно авторизоваться, чтобы получить неограниченный доступ ко всем урокам на нашей платформе'}
					/>
					<Step
						image={choose}
						title={'ШАГ 2 — Выбор роли'}
						text={'Роль ученика предназначена для наших маленьких и любознательных гостей, а роль Учителя для педагогов, которые хотят  создавать и публиковать свои уроки.'}
					/>
					<Step
						image={evaluation}
						title={'ШАГ 3 — Поиск урока'}
						text={'Найти нужный и интересный вам урок очень легко!  Просто перейди во вкладку Каталог и используй дополнительные фильтры по темам.'}
					/>
					<Step
						image={love}
						title={'ШАГ 4 — Готово!'}
						text={'Открывай для себя знания вместе с Youngeek!'}
					/>
				</div>
			</div>
		</div>
	);
}

export default StepsBlock;