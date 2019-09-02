import React, { Component } from 'react'

export default class Events extends Component {
    render() {
        const { Events } = this.props
        console.log('events:::', Events)
        return ( <div class="container">
        <div class="row">
            {Events.map(event => (
                <div className="col">
                    <img src={event.img} alt='image' style={{width:'200px'}}/>
                    <h3>{event.title}</h3>
                    <p>{event.disc}</p>
                </div>
            ))}
            </div>
            </div>            
        )
    }
}
