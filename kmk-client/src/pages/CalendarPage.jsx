import '../style/calendar.scss';
import '../style/widget.scss';

import Header from '../components/Header';
import React from 'react';
import { getEvents, getNameOfMonth } from '../actions/event';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Month({year, month}) {
    return (
        <div className="monthHeader">
            {getNameOfMonth(month)}{" "}{year}
        </div>
    )
}


function Event({event, event: {date}}) {
    const dateObj = new Date(date);

    const month = dateObj.getMonth();
    const day = dateObj.getDate();

    return (
        <Link to={`event/${event.id}`}>
            <div className="event widget">
                <div className="date">
                    <div className="day">{day}</div>
                    <div className="month">{getNameOfMonth(month).substring(0,3)}</div>
                </div>
                <div className="name">{event.title}</div>
            </div>
        </Link>
    )
}

class CalendarPage extends React.Component
{
    componentDidMount() {
        this.props.getEvents();
    }

    render() {

        const { events } = this.props;

        return (
            <div className="page">
                <Header title={"Kalender"}/>
                {events.map((event, index) => {

                    const dateObj = new Date(event.date);

                    const year = dateObj.getFullYear();
                    const month = dateObj.getMonth();

                    return (<div key={index}>
                        {(index === 0 || new Date(events[index - 1].date).getMonth() !== month) && <Month month={month} year={year}/>}
                        <Event event={event}/>
                    </div>) 
                })}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        events: state.event.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => dispatch(getEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage)
