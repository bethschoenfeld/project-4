import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getInnovatorRoute} from '../../actions/thunk.innovators.js'
import {getOneInnovatorRoute} from '../../actions/thunk.innovators.js'
import {getEventsRoute} from '../../actions/thunk.events.js'
import {push} from 'react-router-redux'
import Navbar from '../navbar/Navbar'


class InnovatorProfile extends Component {

  componentWillMount() {
    const innovatorId = this.props.match.params.innovatorId
    this.props.getEventsRoute(innovatorId)
    this.props.getOneInnovatorRoute(innovatorId)
  }

  render() {
    const innovatorId = this.props.match.params.innovatorId
    return (
      
      <Container>
        <div>
          <Navbar/>
        </div>

        {this.props.innovators
          .map((innovator, i) => {
            if (innovator.id == innovatorId) {
              return (
                <div className="innovatorCard"key={i}>
                  <h2>{innovator.name}</h2>
                  <br/>
                  <img src={innovator.picture} alt={innovator.name}/>
                  <br/>
                  Job: {innovator.job}
                  <br/>
                  <br/>
                  About: {innovator.description}
                </div>
              )
            }
          })}

        <h2 onClick={() => this.props.push(`/innovators/${innovatorId}/events/`)}>Events</h2>
        <Event>
          {this.props.events
            .map((event, i) => {
              console.log("event id "+ event.innovator_id)
              console.log("params id "+ innovatorId)

              if (event.innovator_id == innovatorId){
              return (
                <div key={i}>
                  <div onClick={() => this.props.push(`/innovators/${innovatorId}/events/${event.id}/show`)}>
                    Description: 
                    <br/>
                    {event.description}
                    <br/>
                  </div>
                </div>
              )}
            })}
        </Event>
      </Container>

    );
  }
}

const mapStateToProps = (state) => {
  return {innovators: state.innovators, events: state.events}
}

export default connect(mapStateToProps, {getInnovatorRoute, getOneInnovatorRoute, getEventsRoute, push})(InnovatorProfile);





const NavBox = styled.div `
display: flex;
flex-direction: row;
background: black;
`
const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: relative; 
    top: 0px;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;

    .innovatorCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80vh;
    }

    img{
      
      width: 60vh;
      height: 45vh;
      border: 2px solid white;
      margin-bottom:20px;
    }
    h2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      /* text-shadow:2px 2px 2px rgba(0,0,0,0.45); */
    }
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
      background:rgba(255,255,255,0);
      cursor: pointer;
      &:hover{
      color: white;
      background:rgba(0,0,0,0.15);
      transform:translateY(2px);
      }};
`
const Event = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* flex-flow:wrap; */
    text-align: left;
    background:rgba(255,255,255,0.55);
    cursor: pointer;
    margin:2px;
    padding-left: 15px;
    width: 80vh;
    `
