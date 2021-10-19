import React from "react";
import {Formik, Field, Form} from 'formik'
import s from './../ProfilePage.module.css'
import {roles} from "../../../common/roles";

const ProfileForm = (props) => {
	return (
		<div>
			<Formik
				initialValues={{
					name: props.name,
					birthday: props.birthday
				}}
				onSubmit={values => props.updateProfile(values.name, values.birthday)}
			>
				<Form className={s.form}>
					{!props.isEdit &&
					<div className="mb-3">
						<label className={`form-label ${s.formLabel}`}>Email</label>
						<div className="input-group">
							<div className={s.formControl}>{props.email}</div>
						</div>
					</div>
					}
					{props.isEdit &&
					<div className="mb-3">
						<label htmlFor="name" className={`form-label ${s.formLabel}`}>Новое имя пользователя</label>
						<div className="input-group">
							<Field type={'text'} name={'name'} className={s.formControl} id={'name'}
							       disabled={!props.isEdit}/>
						</div>
					</div>
					}
					<div className="mb-3">
						<label htmlFor="birthday" className={`form-label ${s.formLabel}`}>Дата рождения</label>
						<div className="input-group">
							<Field type={'date'} name={'birthday'} className={s.formControl} id={'birthday'}
							       disabled={!props.isEdit}/>
						</div>
					</div>
					{!props.isEdit &&
					<div className="mb-3">
						<label className={`form-label ${s.formLabel}`}>Роль</label>
						<div className="input-group">
							<div className={s.formControl}>{roles[props.role]}</div>
						</div>
					</div>
					}
					{props.isEdit && <button type={'submit'} className={s.btn}>Сохранить изменения</button>}
				</Form>
			</Formik>
		</div>
	);
};

export default ProfileForm;