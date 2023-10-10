import '../style/quickMenu.scss';

import Icon from './Icon';
import { Link } from 'react-router-dom';
import React from 'react';

export default class Menu extends React.Component
{
    render() {
        const menuItems = [{
                label: "Hem", 
                route: "", 
                icon: "house", 
                selected: true
            }, {
                label: "Kalender", 
                route: "calendar",  
                icon: "calendar", 
                selected: false
            }, {
                label: "Min profil", 
                route: "user", 
                icon: "user", selected: 
                false
            }, {
                label: "Meny", 
                route: "menu", 
                icon: "bars", 
                selected: false
            }
        ];

        return (
            <div className="menu">
                {menuItems.map((item, i) => 
                    <Link 
                        className={`item ${item.selected ? "selected" : ""}`}
                        key={i} 
                        to={item.route} 
                    >
                         <Icon type={item.icon} />
                        <div>{item.label}</div>
                    </Link>
                )}
            </div>
         );
    }
}