import React from "react";
import s from './../ProfilePage.module.css'
import PasswordInput from "../../AuthPage/inputFieldComponents/PasswordInput";
import {Form, Formik, Field} from "formik";

const newForm = (props) => {
    return (
        <Formik
            initialValues={{
                password: ''
            }}
            onSubmit={values => props.changePassword(values.password)}
        >
            <Form>
                <label htmlFor="password" className={`form-label ${s.formLabel}`}>Новый пароль</label>
                <div className="mb-3">
                    <div className="input-group">
                        <Field
                            type="password"
                            className={`form-control ${s.formControl}`}
                            placeholder="Пароль"
                            id="password"
                            name={'password'}
                        />
                    </div>
                    <div className={`invalid-feedback ${s.invalidFeedback}`}>
                        {props.validationMessage}
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

const PasswordForm = (props) => {
    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <label htmlFor="validationDefaultPassword" className={`form-label ${s.formLabel}`}>Новый пароль</label>
                <PasswordInput changeField={props.changeField}/>
            </form>
        </div>
    );
};

export default PasswordForm;