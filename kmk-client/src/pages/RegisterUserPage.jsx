import '../style/login.scss';
import '../style/widget.scss';
import '../style/button.scss';

import React from 'react';
import RegisterUserForm from '../components/RegisterUserForm';
import { editUserForm, registerUser, validateUserForm } from '../actions/user';
import { connect } from 'react-redux';
import Button from '../components/Button';

class RegisterUserPage extends React.Component
{
    render() {

        const { editUserForm, form, registerUser } = this.props;

        return (
            <div className="page">
                <h3>
                    Bli medlem
                </h3>
                <RegisterUserForm 
                    form={form} 
                    onClickRegister={registerUser} 
                    onEdit={editUserForm}
                />
                <Button label="Bli medlem" onClick={registerUser} disabled={!validateUserForm(form)}/>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        form: state.user.register.form
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user)),
        editUserForm: (change) => dispatch(editUserForm(change)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserPage)