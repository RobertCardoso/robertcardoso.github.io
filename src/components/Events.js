import React, { Component } from 'react';
import cookie from 'cookie'

import Container from '@mui/material/Container'
import axios from 'axios'
import EventCard from './EventCard';

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfEvents: [],
        }
    };



    componentDidMount() {
        axios.get('https://a-event.herokuapp.com/events')
            .then(res => {
                
                const arrayOfEvents = res.data
                this.setState({ arrayOfEvents })
                
            }).catch(function (error) {
                console.log(error)
                document.location.reload();

              })
            
    }



    render() {
        return (
            <Container sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                {this.state.arrayOfEvents.map((event, index) => {
                    return (

                        <EventCard key={index} id={event.id} name={event.eventName} address={event.address} price={event.price} eventmusic={event.eventmusic} eventdate={event.eventdate} description={event.description} userId={event.userId}  variant="outlined"></EventCard>


                    )
                })}
            </Container>
        )




    }


}

export default Events

















