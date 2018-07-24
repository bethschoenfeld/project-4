import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getOneUserRoute } from '../../actions/thunk.users.js'
import { getEventsRoute } from '../../actions/thunk.events.js'
import { getInnovatorRoute } from '../../actions/thunk.innovators.js'
import Navbar from '../navbar/Navbar.js'

class UserProfile extends Component {

    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.getOneUserRoute(userId)
        this.props.getEventsRoute(userId)

        const innovatorId = this.props.match.params.innovatorId;
        this.props.getInnovatorRoute(innovatorId)
    }
    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                singleUser: {
                    id: this.props.match.params.userId,
                    username: nextProps.singleUser.username,
                    email: nextProps.singleUser.email,
                    picture: nextProps.singleUser.picture,

                }
            }
        )
    }

    state = {
        singleUser: {
            username: "",
            email: "",
            picture: "",
        }
    }

    render() {
        const innovatorId = this.props.match.params.innovatorId
        return (

            <Container>
                <Navbar />
                <Header>
                    <div>
                        User Profile
                    </div>
                </Header>
                <img src={this.state.singleUser.picture} alt={this.state.singleUser.username} />
                <h2>
                    {this.state.singleUser.username}
                </h2>
                <h4>
                    Email: {this.state.singleUser.email}
                </h4>
                <h1 onClick={() => this.props.push(`/events`)}>Events</h1>
                {this.props.events
                    .map((event, i) => {
                        console.log ("event id" + event.innovator_id)
                        console.log ("innovator id" + innovatorId)
                        console.log ("event description" + event.description)
                        // if (event.innovator_id == innovator) 
                        return (
                            <div key={i}>
                                {/* <div onClick={() => this.props.push(`/users/${userId}/events/${event.id}/show`)}> */}

                                <h4>
                                    Innovator: {event.innovator}
                                </h4>
                                {/* <h4>
                                            Workshop: {event.workshop}
                                        </h4>
                                        <h4>
                                            One on one: {event.oneonone}
                                        </h4> */}
                                <h4>
                                    Description: {event.description}
                                </h4>

                                <br />
                            </div>
                            // </div>
                        )
                    })}
                    {/* {this.props.innovators
                    .map((innovator, i) => {
                        if (innovator.innovator_id == innovatorId) {
                            return (
                                <h4>
                                    Innovator: {innovator.name}
                                </h4>
                            )
                        }
                    })} */}

            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return { singleUser: state.users[0], events: state.events }
}

export default connect(mapStateToProps, { push, getOneUserRoute, getEventsRoute, getInnovatorRoute })(UserProfile);





const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    img{
        object-fit:cover;
        width: 45vh;
        height: 45vh;
        border: 2px solid black;
    }
    button{
        border:1px solid black;   
    };
    h4{
        display:flex;
        justify-content:center;
        width:75vw;
        font-size: 25px;
    }
    `
const Header = styled.h3`
margin: 40px auto;
font-size: 5vh;
`;