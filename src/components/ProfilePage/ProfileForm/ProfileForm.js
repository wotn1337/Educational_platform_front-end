import React from "react";
import s from './../ProfilePage.module.css'

const ProfileForm = (props) => {
    const showEditForm= (e) => {
        e.preventDefault();
        props.changeShowProfilerForm()
    };
    
    return (
            <div>
                <form className={s.form}>
                    <div className="mb-3">
                        <label htmlFor="validationDefaultEmail" className={`form-label ${s.formLabel}`}>E-mail</label>
                        <div className="input-group">
                            <input
                                disabled
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
                                disabled
                                type="date"
                                className={`${s.formControl}`}
                                id="validationCustomDate"
                                onChange={(event) => props.changeField('birthday', event.target.value)}
                                value={props.birthday}
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
                                disabled
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
            </div>
    );
};

export default ProfileForm;