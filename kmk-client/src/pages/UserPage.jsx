import '../style/user.scss';
import '../style/widget.scss';
import { connect } from 'react-redux';

import Header from '../components/Header';
import React from 'react';
import { getInstrumentName } from '../actions/instrument,';
import { getUser } from '../actions/user';

class UserPage extends React.Component
{

    componentDidMount() {
        this.props.getUser(42);
    }

    render() {

        const {user} = this.props;

        return (
            <div className="page">
                <Header title={"Min profil"}/>
                <div className="widget">
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{getInstrumentName(user.instrument)}</div>
                </div>
            </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (id) => dispatch(getUser(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)