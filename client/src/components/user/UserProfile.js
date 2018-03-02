import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getOneUserRoute } from '../../actions/thunk.users.js'
import { getEventsRoute } from '../../actions/thunk.events.js'
import Navbar from '../navbar/Navbar.js'

class UserProfile extends Component {

    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.getOneUserRoute(userId)
        this.props.getEventsRoute(userId)

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
        const userId = this.props.match.params.userId
        return (

            <Container>
                <div>
                    <Navbar />
                </div>
                <h3>User Profile</h3>
                <br />
                <img src={this.state.singleUser.picture} alt={this.state.singleUser.username} />
                <h1>
                    {this.state.singleUser.username}
                    <br />
                    {this.state.singleUser.email}
                </h1>

                <h2 onClick={() => this.props.push(`/users/${userId}/events/`)}>Events</h2>
                    {this.props.events
                        .map((event, i) => {
                            return (
                                <div key={i}>
                                    <div onClick={() => this.props.push(`/users/${userId}/events/${event.id}/show`)}>
                                        Innovator: {event.innovator}
                                        <br/>
                                        Description: {event.description}
                                        
                                        <br />
                                    </div>
                                </div>
                            )
                        })}

            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return { singleUser: state.users[0], events: state.events }
}

export default connect(mapStateToProps, { getOneUserRoute, getEventsRoute, })(UserProfile);





const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;

    img{
        margin:12.5px;
        width: 45vh;
        height: 45vh;
        border: 2px solid white;
        box-shadow:5px 5px 5px rgba(255,255,255,0.45);
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
        cursor: pointer;
        &:hover{
        color: white;
        background:rgba(0,0,0,0.15);
        transform:translateY(2px);
    }};
`