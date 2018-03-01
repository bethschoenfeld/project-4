import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import{getEventsRoute} from '../../actions/thunk.events.js'
import Navbar from '../navbar/Navbar.js'

class EventPage extends Component {

componentWillMount() {
  const innovatorId = this.props.match.params.innovatorId

  this.props.getEventsRoute(innovatorId)
}

  render() {
    const innovatorId = this.props.match.params.innovatorId

    return (
      
      <Body>
        <Navbar/>
        <h2>Event Page</h2>
        <Event>
          {this
            .props
            .events
            .map((event, i) => {
              return (
                <div key={i}>
                  <div onClick={() => this.props.push(`/innovators/${innovatorId}/events/${event.id}/show`)}>
                    Title: {event.name}
                    <br/>
                    Innovator: {event.innovatorId}
                    <br/>
                    Description: {event.description}
                    <br/>

                  </div>
                </div>
              )
            })}
        </Event>
      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return {events: state.events}
}
export default connect(mapStateToProps, {push, getEventsRoute})(EventPage)



const Body = styled.div `
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

const PostEdit = styled.div `
font-family: 'Montserrat', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 30px;
position: absolute;
`

const Event = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* flex-flow:wrap; */
    text-align: left;
    box-shadow:4px 4px 4px rgba(0,0,0,0.45);
    cursor: pointer;
    background:rgba(255,255,255,0.45);
    margin:2px;
    border: 1px solid darkgray;
    padding: 15px;
    height: 60vh;
    width: 80vh;
    /* overflow:scroll; */
    button{
      border:1px solid black;
      background:none;
      width: 125px;
      height: 45px;
      padding:7.5px;
      font-size: 15px;
      text-align: center;
      margin:5px;
      font-family: 'Montserrat', sans-serif;
      background:rgba(255,255,255,0.45);
      border-radius: 5px;
      cursor: pointer;
      &:hover{
      color: white;
      background:rgba(0,0,0,0.15);
      transform:translateY(2px);
      }
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      width: 60vh;
    }
`
