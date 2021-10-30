import React from "react";
import {connect} from "react-redux";
import DescriptionBanner from "./DescriptionBanner/DescriptionBanner";
import StepsBlock from "./StepsBlock/StepsBlock";
import TargetAudienceBlock from "./TargetAudienceBlock/TargetAudienceBlock";
import QuestionsBlock from "./QuestionsBlock/QuestionsBlock";
import AboutBlock from "./AboutBlock/AboutBlock";
import s from './MainPage.module.css';


const MainPage = (props) => {
	return (
		<>
			<DescriptionBanner isAuth={props.isAuth}/>
			<main className={s.main}>
				<StepsBlock/>
				<section className={s.audienceAndQuestions}>
					<TargetAudienceBlock/>
					<QuestionsBlock/>
				</section>
				<AboutBlock/>
			</main>
		</>

	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(MainPage);