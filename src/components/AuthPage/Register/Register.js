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
            name: props.register.name,
            birthday: props.register.birthday,
            role: props.register.role,
            email: props.register.email,
            password: props.register.password
        });
        axios.post('http://localhost/api/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            props.setValidationMessage({
                name: err.response.data.errors.name,
                date: err.response.data.errors.date,
                role: err.response.data.errors.role,
                email: err.response.data.errors.email,
                password: err.response.data.errors.password,
            });
        });
    };

    return (
        <div className={`container-sm ${s.form}`}>
			<div>
				<form className={s.form}>
					<h1 className={s.text}>Введите свои данные</h1>
					<NameInput
						changeField={props.changeField}
						name={props.register.name}
						validationMessage={props.register.validationMessages.name}
					/>
					<BirthdayInput
						changeField={props.changeField}
						birthday={props.register.birthday}
						validationMessage={props.register.validationMessages.birthday}
					/>
					<RoleInput
						changeField={props.changeField}
						role={props.register.role}
						validationMessage={props.register.validationMessages.role}
					/>
					<EmailInput
						changeField={props.changeField}
						email={props.register.email}
						validationMessage={props.register.validationMessages.email}
					/>
					<PasswordInput
						changeField={props.changeField}
						password={props.register.password}
						validationMessage={props.register.validationMessages.password}
					/>
				</form>
			</div>
            <button
                onClick={event => {
                    submitForm(event)
                }}
                className={`${s.btn}`}>
                Зарегистрироваться
            </button>
        </div>
    );
}

export default Register;
