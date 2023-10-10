import '../style/user.scss';
import '../style/widget.scss';

import Menu from './Menu';
import { Outlet } from "react-router-dom";
import React from 'react';

export default class AppLayout extends React.Component
{

    render() {

        const {history} = this.props;

        return (
            <div>
                <Outlet/>
                <Menu history={history}/>
            </div>
         );
    }
}
