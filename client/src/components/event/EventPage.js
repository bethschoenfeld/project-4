import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getEventsRoute } from '../../actions/thunk.events.js'
import { getInnovatorRoute } from '../../actions/thunk.innovators.js'
import Navbar from '../navbar/Navbar.js'
import axios from 'axios'



class EventPage extends Component {

  state = {
    innovators: [],
    events: [],
    eventAndInnovator: []

  }

  async componentWillMount() {
    const innovatorId = this.props.match.params.innovatorId
    this.props.getEventsRoute(innovatorId)
    await this.getInnovator()
  }





  getInnovator = async () => {
    const allEvents = await axios.get('/api/events')
    const events = allEvents.data


    const allInnovators = await axios.get('/api/innovators')
    const innovators = allInnovators.data

    const eventAndInnovator = []
    events.forEach((individualEvent) => {
      const event = individualEvent.innovator_id
      const innovator = innovators.some((person) => {
        if (person.id === event) {
          return eventAndInnovator.push({ event: individualEvent, innovator: person.name })
          return true;
        }
      })

    })


    this.setState({
      innovators: innovators,
      events: events,
      eventAndInnovator
    })

  }


  render() {
    const innovatorId = this.props.match.params.innovatorId

    return (

      <Body>
        <Navbar />
        <Header>
        <div>Events Page</div>
        </Header>
        {this.state.eventAndInnovator.map((eventInnovator) => {
            return (
              <div>
                <h3>{eventInnovator.innovator}</h3>
                <Event>
                {eventInnovator.event.description}
                </Event>
                
              </div>
            )
          })
        }

      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return { events: state.events }
}
export default connect(mapStateToProps, { push, getEventsRoute, getInnovatorRoute })(EventPage)



const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

const Header = styled.div `
    margin: 40px auto;
    font-size: 10vh;
`;

const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin:2px;
    padding: 15px;
    height: 10vh;
    width: 60vh;
`
