import '../style/widget.scss';
import '../style/button.scss';

import React from 'react';
import TextField from '../components/TextField';
import Label from '../components/Label';
import Button from '../components/Button';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { createEvent, editEvent } from '../actions/event';
import DatePicker from '../components/DatePicker';

const mapStateToProps = state => {
    return {
        event: state.event.event,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editEvent: (change) => dispatch(editEvent(change)),
        createEvent: () => dispatch(createEvent())
    }
}

const CreateEventPage = ({event, editEvent, createEvent}) => {

    return (
        <div>
            <Header title="Skapa händelse"/>
            <div className="form widget">
                <Label label="Datum">
                    <DatePicker onEdit={editEvent}/>
                </Label>
                <Label label="Namn">
                    <TextField source={event} property="title" onEdit={editEvent}/>
                </Label>
                <Label label="Beskrivning">
                    <TextField source={event} property="description" onEdit={editEvent}/>
                </Label>
            </div>
            <Button label="Skapa" onClick={createEvent}/>
        </div>
     );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage)