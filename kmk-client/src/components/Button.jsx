import '../style/button.scss';

import React from 'react';

export default class Button extends React.Component
{

    render() {

        const {color, disabled, label, onClick} = this.props;

        return (
            <button 
                className="button" 
                disabled={disabled} 
                onClick={onClick}
                style={color ? {backgroundColor: color} : undefined}
            >
                {label}
            </button>
         );
    }
}