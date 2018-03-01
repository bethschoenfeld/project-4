import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getInnovatorRoute} from '../../actions/thunk.innovators.js'
import {push} from 'react-router-redux'
import Navbar from '../navbar/Navbar'

class InnovatorProfile extends Component {

  componentWillMount() {
    const innovatorId = this.props.match.params.innovatorId
  }

  render() {
    const innovatorId = this.props.match.params.innovatorId
    return (
      
      <Container>
        <div>
          <Navbar className="NavBox"/>
        </div>
        {this.props.innovators
          .map((innovator, i) => {
            if (innovator.id == innovatorId) {
              return (
                <div key={i}>
                  <h2>{innovator.name}</h2>
                  <br/>
                  <img src={innovator.picture} alt={innovator.name}/>
                </div>

              )
            }
          })}

        {/* <h2 onClick={() => this.props.push(`/innovators/${innovatorId}/events/`)}>Events</h2>
        {this.props.events
          .map((event, i) => {
            return (
              <Event>
                <div key={i}>
                  <div>
                    <h3 onClick={() => this.props.push(`/innovators/${innovatorId}/events/${event.id}/show`)}>{event.title}</h3>
                  </div>
                </div>
              </Event>
            ) */}
          {/* })} */}
      </Container>

    );
  }
}

const mapStateToProps = (state) => {
  return {innovators: state.innovators, 
    // events: state.events
  }
}

export default connect(mapStateToProps, {getInnovatorRoute, 
  // getEventsRoute, 
  push})(InnovatorProfile);





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
    position: absolute; 
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    top: 0px;
    left: 0;
    background-size: cover;
    
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    img{
      width: 60vh;
      height: 45vh;
      border: 2px solid white;
      margin-bottom:20px;
      box-shadow:5px 5px 5px rgba(255,255,255,0.45);
    }
    h2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:white;
      text-shadow:2px 2px 2px rgba(0,0,0,0.45);
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
      background:rgba(255,255,255,0.45);
      border-radius: 5px;
      cursor: pointer;
      &:hover{
      color: white;
      background:rgba(0,0,0,0.15);
      transform:translateY(2px);
      }};
`
// const Event = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     /* flex-flow:wrap; */
//     text-align: left;
//     box-shadow:4px 4px 4px rgba(0,0,0,0.45);
//     background:rgba(255,255,255,0.55);
//     cursor: pointer;
//     margin:2px;
//     padding-left: 15px;
//     /* height: 40vh; */
//     width: 80vh;
//     /* overflow:scroll; */
