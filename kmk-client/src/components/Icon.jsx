import { faCalendar, faHouse, faBars, faUser, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCalendar, faHouse, faUser, faBars, faCalendarPlus);

export default class Icon extends React.Component
{
    render() {

        const { type } = this.props;

        return (
            <div className="icon">
                <FontAwesomeIcon icon={type} />
            </div>
         );
    }
}