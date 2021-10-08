import React from "react";
import s from "../MainPage/MainPage.module.css";


const MainPage = () => {
    return (
        <div>
            <div className={s.descriptionBanner}>
				<span className={s.description}>
					<p className={s.slogan}><strong className={s.name}>youngeek</strong> -
                        для самых маленьких и любознательных</p>
					<p className={s.text}>Миссия нашей образовательной платформы сделать обучение для детей - увлекательным,
                        а для учителей - удобным и простым</p>
                    <p className={s.text}>Учиться с нами <strong>интересно</strong></p>
				</span>
                <span className={s.logo}>
					<img src="https://cdn-icons-png.flaticon.com/512/1707/1707196.png" alt="logo" width='250'/>
					{/*youngeek*/}
				</span>
            </div>
            <div className={`${s.contentWrapper}`}>
                <div className={`${s.block}  ${s.block1}`}>
                    <span>
                        <p className={s.step}>шаг 1</p>
                        <p className={s.instruction}>Зарегистрируйся</p>
                    </span>
                    <span>
                        {/*<img src="https://img-premium.flaticon.com/png/512/2397/premium/2397697.png?token=exp=1633588608~hmac=3e53f5c62b9c3651e6322df7c0545403" width='200' alt=""/>*/}
                    </span>
                </div>
                <div className={`${s.block} ${s.block2}`}>
                    <span>
                        <p className={s.step}>шаг 2</p>
                        <p className={s.instruction}>Выбери роль</p>
                    </span>
                    <span>
                        {/*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475365.png?token=exp=1633588572~hmac=837978dc3c66ad4be8a3b390175ebfab" width='200' alt=""/>*/}
                    </span>
                </div>
                <div className={`${s.block} ${s.block3}`}>
                    <span>
                        <p className={s.step}>шаг 3</p>
                        <p className={s.instruction}>Найди урок</p>
                    </span>
                    <span>
                        {/*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475496.png?token=exp=1633588735~hmac=da8fa409d888b1370ed23b86440407d0" width='200' alt=""/>*/}
                    </span>
                </div>
                <div className={`${s.block} ${s.block4}`}>
                    <span>
                        <p className={s.step}>шаг 4</p>
                        <p className={s.instruction}>Развивайся вместе с нами</p>
                    </span>
                    <span>
                        {/*<img src="https://img-premium.flaticon.com/png/512/2475/premium/2475403.png?token=exp=1633605436~hmac=47f12b436d03a526f079fd7c72493924"  width='200' alt=""/>*/}
                    </span>
                </div>
            </div>
        </div>

    );
};

export default MainPage;