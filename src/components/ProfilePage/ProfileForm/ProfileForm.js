import React from "react";
import s from './../ProfilePage.module.css'
import EmailInput from "../InputFields/EmailInput";
import NameInput from "../InputFields/NameInput";
import BirthdayInput from "../InputFields/BirthdayInput";
import RoleInput from "../InputFields/RoleInput";

class ProfileForm extends React.Component {
    state = {
        isEdit: false
    };

    changeEditMode = () => {
        if (this.props.profile.showProfileForm !== this.state.isEdit) {
            this.setState({
                isEdit: this.props.profile.showProfileForm
            });
        }
    };

    render() {
        this.changeEditMode();
        return (
            <div>
                <form className={s.form}>
                    {this.state.isEdit ? <EmailInput email={this.props.profile.email}/>
                        : <NameInput name={this.props.profile.name}
                                     changeField={this.props.changeField}/>}
                    <BirthdayInput birthday={this.props.profile.birthday}
                                   edit={this.state.isEdit}
                                   changeField={this.props.changeField}/>
                    {this.state.isEdit && <RoleInput role={this.props.profile.role}/>}
                </form>
            </div>
        )
    };
}


export default ProfileForm;