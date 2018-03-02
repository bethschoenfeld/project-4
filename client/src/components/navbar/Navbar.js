
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import { getEventsRoute } from '../../actions/thunk.events.js'

class Navbar extends Component {

    render() {

        return (
            <Container>
                <button onClick={() => this.props.push(`/`)}>
                    Home
                </button>
                <button onClick={() => this.props.push(`/users`)}>
                    Users
                </button>
                <button onClick={() => this.props.push(`/innovators`)}>
                    Innovators
                </button>
                <button onClick={() => this.props.push(`/events`)}>
                    Events
                </button>

            </Container>
        )
    }
}

export default connect(null, { push, getEventsRoute })(Navbar)




const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
    color:black;
    width: 100%;
    position: relative; 
    margin-top:20px;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Raleway', sans-serif;
    /* background-color: #212121; */
    button{
    width: 125px;
    height: 45px;
    padding:7.5px;
    font-size: 15px;
    text-align: center;
    margin:5px;
    font-family: 'Raleway', sans-serif;
    background:rgba(255,255,255,0.45);
    cursor: pointer;
    &:hover{
        color: white;
    background:rgba(0,0,0,0.85);
    }};
`
