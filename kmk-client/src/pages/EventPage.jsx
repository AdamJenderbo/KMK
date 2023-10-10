import '../style/widget.scss';
import '../style/button.scss';
import '../style/layout.scss'
import '../style/calendar.scss'

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { acceptInvite, cancelEvent, declineInvite, editEvent, getEvent } from '../actions/event';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { getUser } from '../actions/user';

const mapStateToProps = state => {
    return {
        event: state.event.event,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        acceptInvite: (eventId, userId) => dispatch(acceptInvite(eventId, userId)),
        declineInvite: (eventId, userId) => dispatch(declineInvite(eventId, userId)),
        cancelEvent: (id) => dispatch(cancelEvent(id)),
        editEvent: (change) => dispatch(editEvent(change)),
        getEvent: (id) => dispatch(getEvent(id)),
        getUser: (id) => dispatch(getUser(id))
    }
}



const Invite = ({invite, acceptInvite, declineInvite}) => {


    return (<div>
                {!invite.answer && <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button
                        color="green"
                        label="Kommer"
                        onClick={() => acceptInvite(invite.eventId, invite.userId)}
                    />
                    <Button
                        color="red"
                        label="Kommer inte"
                        onClick={() => declineInvite(invite.eventId, invite.userId)}
                    />
                </div>}
                {invite.answer === 0 && <div>Du kommer inte</div>}
                {invite.answer === 1 && <div>Du kommer</div>}
        </div>);
}

const EventPage = ({acceptInvite, declineInvite, cancelEvent, event, getEvent, user}) => {    

    let { id } = useParams();

    useEffect(() => {
        
        getEvent(id);

    }, [getEvent, id, user]);


    const getInvite = () => {
        const filteredInvites = event.invites.filter(invite => invite.userId === user.id);

        if(filteredInvites.length > 0)
            return filteredInvites[0];
        else
            return null;
    };

    const invite = getInvite();

    return (
        <div className='eventPage'>
            <Header/>
            <div className='date'>
                {event.dateText}
            </div>
            <div className='title'>
            <div className='col-9'>{event.title}</div>
            </div>
            <div className="form widget">
                <div>
                    {`${event.noOfAnswers} personer har svarat`}
                </div>
                <div>
                    {event.description}
                </div>
            </div>
            {invite &&
                <Invite 
                    invite={invite}
                    acceptInvite={acceptInvite}
                    declineInvite={declineInvite}
                />}
        </div>
     );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)