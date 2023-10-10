import React from 'react';
import '../style/selectField.scss';

export default class SelectField extends React.Component
{
    constructor(props) {
        super(props);

        this.onChange = (event) => {
            const {onEdit, property, source} = this.props;
            const value = event.target.value;
            onEdit({ [property]: parseInt(value)}, source);
        };
    }

    render() {

        const { className, source, property, options} = this.props;

        return (
            <select className={className} value={source[property]} onChange={this.onChange}>
                {options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
            </select>
         );
    }
}
