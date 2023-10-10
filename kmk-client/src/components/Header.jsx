import '../style/header.scss';

import Button from './Button';
import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/authentication';


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

const Header = ({logOut, title}) => 
{

    return (
        <div className="header">
            <h3>{title}</h3>
            <Link to="/login">
                <Button label="Logga ut" onClick={logOut}></Button>
            </Link>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)