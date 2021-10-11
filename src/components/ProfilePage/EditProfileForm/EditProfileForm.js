import React from "react";
import s from './../ProfilePage.module.css'

const EditProfileForm = (props) => {
    return (
            <div>
                <form className={s.form}>
                    <div className="mb-3">
                        <label htmlFor="validationDefaultEmail" className={`form-label ${s.formLabel}`}>E-mail</label>
                        <div className="input-group">
                            <input
                                type="email"
                                className={`${s.formControl}`}
                                placeholder={props.email}
                                id="validationDefaultEmail"
                                onChange={(event) => props.changeField('email', event.target.value)}
                                value={props.email}
                            />
                        </div>
                        <div className={`invalid-feedback ${s.invalidFeedback}`}>
                            {props.validationMessage}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustomDate" className={`form-label ${s.formLabel}`}>Дата
                            рождения</label>
                        <div className="input-group">
                            <input
                                type="date"
                                className={`${s.formControl}`}
                                id="validationCustomDate"
                                onChange={(event) => props.changeField('birthday', event.target.value)}
                                value={props.birthday}
                                placeholder={props.birthday}
                            />
                        </div>
                        <div className={`invalid-feedback ${s.invalidFeedback}`}>
                            {props.validationMessage}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationDefaultRole" className={`form-label ${s.formLabel}`}>Роль</label>
                        <div className="input-group">
                            <select
                                className={`${s.formControl}`}
                                id="validationDefaultRole"
                                onChange={(event) => props.changeField('role', event.target.value)}
                                value={props.role}
                            >
                                <option value="creator">Учитель</option>
                                <option value="student">Ученик</option>
                            </select>
                        </div>
                        <div className={`invalid-feedback ${s.invalidFeedback}`}>
                            {props.validationMessage}
                        </div>
                    </div>

                </form>
                {/*<button className={s.btn}>*/}
                {/*    Сохранить изменения*/}
                {/*</button>*/}
            </div>
    );
};

export default EditProfileForm;