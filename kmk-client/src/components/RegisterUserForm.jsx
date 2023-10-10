import '../style/login.scss';
import '../style/widget.scss';
import '../style/button.scss';

import PasswordField from './PasswordField';
import React from 'react';
import TextField from './TextField';
import { instrumentOptions } from '../actions/instrument,';
import SelectField from './SelectField';
import Label from './Label';

export default class RegisterUserForm extends React.Component
{
    render() {
        
        const {form, onEdit} = this.props;

        return (
            <div className="form widget">
                <Label label="Namn">
                    <TextField source={form} property="name" onEdit={onEdit}/>
                </Label>
                <Label label="Email">
                    <TextField source={form} property="email" onEdit={onEdit}/>
                </Label>
                <Label label="Intrument">
                    <SelectField source={form} property="instrument" onEdit={onEdit} options={instrumentOptions}/>
                </Label>
                <Label label="Lösenord">
                    <PasswordField source={form} property="password" onEdit={onEdit}/>
                </Label>
                <Label label="Bekräfta lösenord">
                    <PasswordField source={form} property="passwordConfirm" onEdit={onEdit}/>
                </Label>
            </div>
         );
    }
}
