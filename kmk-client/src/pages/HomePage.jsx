import '../style/home.scss';

import Header from '../components/Header';
import React from 'react';

export default class HomePage extends React.Component
{

    render() {

        return (
            <div>
                <Header title={"Kungälvs musikkår"}/>
            </div>
         );
    }
}
