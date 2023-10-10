import React from 'react';
import '../style/dateField.scss';
import TextField from './TextField';
import { monthOptions } from '../actions/event';
import SelectField from './SelectField';

export default class DateField extends React.Component
{
    render() {

        const { onEdit, source } = this.props;

        return (
            <div className="dateField">
                <TextField className="col-3" source={source} property="year" onEdit={onEdit}/>
                <SelectField className="col-6" source={source} property="month" options={monthOptions} onEdit={onEdit}/>
                <TextField className="col-3" source={source} property="day" onEdit={onEdit}/>
            </div>
         );
    }
}
