import React from "react";
import s from "./StepsBlock.module.css";
import Step from "./Step/Step";
import checkList from '../../../assets/img/mainPage/checklist.png';
import choose from '../../../assets/img/mainPage/choose.png';
import evaluation from '../../../assets/img/mainPage/evaluation.png';
import love from '../../../assets/img/mainPage/love.png';


const StepsBlock = () => {
	return (
		<div className={`${s.stepsBlockWrapper}`}>
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
			{/*<div className={`${s.block}  ${s.block1}`}>*/}
            {/*        <span>*/}
            {/*            <p className={s.step}>шаг 1</p>*/}
            {/*            <p className={s.instruction}>Зарегистрируйся</p>*/}
            {/*        </span>*/}
			{/*	<span>*/}
            {/*            /!*<img src="https://img-premium.flaticon.com/png/512/2397/premium/2397697.png?token=exp=1633588608~hmac=3e53f5c62b9c3651e6322df7c0545403" width='200' alt=""/>*!/*/}
            {/*        </span>*/}
			{/*</div>*/}
			{/*<div className={`${s.block} ${s.block2}`}>*/}
            {/*        <span>*/}
            {/*            <p className={s.step}>шаг 2</p>*/}
            {/*            <p className={s.instruction}>Выбери роль</p>*/}
            {/*        </span>*/}
			{/*	<span>*/}
            {/*            /!*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475365.png?token=exp=1633588572~hmac=837978dc3c66ad4be8a3b390175ebfab" width='200' alt=""/>*!/*/}
            {/*        </span>*/}
			{/*</div>*/}
			{/*<div className={`${s.block} ${s.block3}`}>*/}
            {/*        <span>*/}
            {/*            <p className={s.step}>шаг 3</p>*/}
            {/*            <p className={s.instruction}>Найди урок</p>*/}
            {/*        </span>*/}
			{/*	<span>*/}
            {/*            /!*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475496.png?token=exp=1633588735~hmac=da8fa409d888b1370ed23b86440407d0" width='200' alt=""/>*!/*/}
            {/*        </span>*/}
			{/*</div>*/}
			{/*<div className={`${s.block} ${s.block4}`}>*/}
            {/*        <span>*/}
            {/*            <p className={s.step}>шаг 4</p>*/}
            {/*            <p className={s.instruction}>Развивайся вместе с нами</p>*/}
            {/*        </span>*/}
			{/*	<span>*/}
            {/*            /!*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475403.png?token=exp=1633605436~hmac=47f12b436d03a526f079fd7c72493924"  width='200' alt=""/>*!/*/}
            {/*        </span>*/}
			{/*</div>*/}
		</div>
	);
}

export default StepsBlock;