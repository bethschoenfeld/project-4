import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getOneEventRoute } from '../../actions/thunk.events.js'
import{getEventsRoute} from '../../actions/thunk.events.js'
import Navbar from '../navbar/Navbar.js'


class EventShow extends Component {

  componentWillMount() {
    const EventId = this.props.match.params.eventId;
    const innovatorId = this.props.match.params.innovatorId;
    this
      .props
      .getOneEventRoute(innovatorId, eventId)

  }
  componentWillReceiveProps(newProps) {
    this.setState({
      eventBeingShown: {
        id: this.props.match.params.eventId,
        // title: newProps.eventBeingShown.name,
        content: newProps.eventBeingShown.description,

      }
    })
  }

  state = {
    eventBeingShown: {
      // name: "",
      description: ""

    }
  }

  render() {
    return (

      <div>
        <div>
          <Navbar />
        </div>
        <h1>Event</h1>
        {/* <br />
        <h3>{this.state.eventBeingShown.name}</h3> */}
        <br />
        <p>{this.state.eventBeingShown.description}</p>


      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return { eventBeingShown: state.events[0] }
}

export default connect(mapStateToProps, { getOneEventRoute, getEventsRoute })(EventShow);
