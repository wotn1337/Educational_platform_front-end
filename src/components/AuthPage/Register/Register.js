import React from 'react';
import axios from "axios";
import NameInput from "../inputFieldComponents/NameInput";
import BirthdayInput from "../inputFieldComponents/BirthdayInput";
import EmailInput from "../inputFieldComponents/EmailInput";
import RoleInput from "../inputFieldComponents/RoleInput";
import PasswordInput from "../inputFieldComponents/PasswordInput";
import s from "./../AuthPage.module.css";

const Register = (props) => {
    const submitForm = (e) => {
        e.preventDefault();
        props.clearValidationMessages();
        const data = JSON.stringify({
            name: props.name,
            birthday: props.birthday,
            role: props.role,
            email: props.email,
            password: props.password
        });
        axios.post('http://localhost/api/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
	        props.setAuth(res.data.token, res.data.token_type);
        }).catch(err => {
            // props.setValidationMessages({
            //     name: err.response.data.errors.name,
            //     date: err.response.data.errors.date,
            //     role: err.response.data.errors.role,
            //     email: err.response.data.errors.email,
            //     password: err.response.data.errors.password,
            // });
        });
    };

    return (
        <div className={`container-sm ${s.form}`}>
			<div>
				<form className={s.form}>
					<h1 className={s.text}>Введите свои данные</h1>
					<NameInput
						changeField={props.changeField}
						name={props.name}
						validationMessage={props.validationMessages.name}
					/>
					<BirthdayInput
						changeField={props.changeField}
						birthday={props.birthday}
						validationMessage={props.validationMessages.birthday}
					/>
					<RoleInput
						changeField={props.changeField}
						role={props.role}
						validationMessage={props.validationMessages.role}
					/>
					<EmailInput
						changeField={props.changeField}
						email={props.email}
						validationMessage={props.validationMessages.email}
					/>
					<PasswordInput
						changeField={props.changeField}
						password={props.password}
						validationMessage={props.validationMessages.password}
					/>
				</form>
			</div>
            <button
                onClick={event => submitForm(event)}
                className={`${s.btn}`}
            >
                Зарегистрироваться
            </button>
        </div>
    );
}

export default Register;
