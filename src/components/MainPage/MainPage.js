import React from "react";
import {connect} from "react-redux";
import DescriptionBanner from "./DescriptionBanner/DescriptionBanner";
import StepsBlock from "./StepsBlock/StepsBlock";
import TargetAudienceBlock from "./TargetAudienceBlock/TargetAudienceBlock";
import QuestionsBlock from "./QuestionsBlock/QuestionsBlock";
import AboutBlock from "./AboutBlock/AboutBlock";


const MainPage = (props) => {
    return (
        <>
            <DescriptionBanner isAuth={props.isAuth}/>
            <StepsBlock/>
            <TargetAudienceBlock/>
            <QuestionsBlock/>
            <AboutBlock/>
        </>

    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(MainPage);