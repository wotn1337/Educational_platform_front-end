import React from "react";
import s from './../ProfilePage.module.css'
import {Form, Formik, Field} from "formik";

const PasswordForm = (props) => {
    return (
        <Formik
            initialValues={{
                password: ''
            }}
            onSubmit={values => props.changePassword(values.password)}
        >
            <Form className={s.form}>
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
                </div>
                <button type={'submit'} className={s.btn}>Подтвердить</button>
            </Form>
        </Formik>
    );
};

export default PasswordForm;