import React, {useState} from 'react';
import Register from "./Register/Register";

const AuthPage = () => {
	const [login, setLogin] = useState(true);

	const clickHandler = (evt) => {
		evt.preventDefault();
		setLogin(!login);
	};

	return (
		<div className="container-md">
			{/*{login ? <Login clickHandler={clickHandler}/> : <Register clickHandler={clickHandler}/>}*/}
			{/*<Login/>*/}
			<Register/>
		</div>
	);
}

export default AuthPage;
