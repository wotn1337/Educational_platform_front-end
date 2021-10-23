import React from "react";
import {connect} from "react-redux";
import DescriptionBanner from "./DescriptionBanner/DescriptionBanner";
import StepsBlock from "./StepsBlock/StepsBlock";


const MainPage = (props) => {
	return (
		<>
			<DescriptionBanner isAuth={props.isAuth}/>
			<StepsBlock />
		</>

	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(MainPage);