import '../style/login.scss';
import '../style/widget.scss';
import '../style/button.scss';

import PasswordField from '../components/PasswordField';
import React from 'react';
import TextField from '../components/TextField';
import Label from '../components/Label';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { logIn } from '../actions/authentication';
import { Link, Navigate } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        form: state.user.register.form,
        isLoggedIn: state.authentication.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (email, password) => dispatch(logIn(email, password))
    }
}

class LoginPage extends React.Component
{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.onEdit = (change) => {
            this.setState({...this.state, ...change});
        }

        this.valid = () => {
            return this.state.email && this.state.email.length > 0 
                && this.state.password && this.state.password.length > 0;
        }

        this.onClickLogIn = () => {
            this.props.logIn(this.state.email, this.state.password);
        };

        this.onClickRegisterUser = () => {
            this.props.logIn(this.state.email, this.state.password);
        };
    }

    render() {

        if(this.props.isLoggedIn) {
            return <Navigate to="/"/>
        }

        return (
            <div className="page">
                <h3>
                    Kungälvs Musikkår
                </h3>
                <div className="form widget">
                    <Label label="Email">
                        <TextField source={this.state} property="email" onEdit={this.onEdit}/>
                    </Label>
                    <Label label="Lösenord">
                        <PasswordField source={this.state} property="password" onEdit={this.onEdit}/>
                    </Label>
                </div>
                <Button label="Logga in" disabled={!this.valid()} onClick={this.onClickLogIn}/>
                <Link to={"/register"}>
                    <Button label="Bli medlem"/>
                </Link>
                
            </div>
         );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)