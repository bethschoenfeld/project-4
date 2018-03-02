import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {sendNewUserToDatabase} from '../../actions/thunk.users.js'
import Navbar from '../navbar/Navbar.js'


class NewUserForm extends Component {

  state = {
    newUserForm: {}
  }

  handleNewUserChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newUserForm = {
      ...this.state.newUserForm
    }
    newUserForm[attributeName] = attributeValue

    this.setState({newUserForm})
  };

  handleAddNewUser = () => {
    this.props
    .sendNewUserToDatabase(this.state.newUserForm)

    this.props.push(`/users`)

    this.setState({
      newUserForm: {
        username: "",
        email: "",
        picture: ""
      }
    })
  }

  render() {
    return (
      <Container>
        <div>
          <Navbar />
        </div>
        
          <div> Username:</div>
        <input
          className="newUser"
          type="text"
          name="username"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.username}
          placeholder="Username"/>
        <br/>
        <div>Email:</div>
        <input
          className="newUser"
          type="text"
          name="email"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.email}
          placeholder="Email"/>
          <br/>
        <div> Picture:</div>
        <input
          className="newUser"
          type="text"
          name="picture"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.picture}
          placeholder="Profile picture URL"/>
        <button onClick={this.handleAddNewUser}>
          Add User
        </button>
      </Container>
    );
  }
}

export default connect(null, {sendNewUserToDatabase, push}) (NewUserForm)





const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      width: 35vh;
      height: 5vh;
      margin: 3px;
      padding-left: 5px;
      background:rgba(255,255,255,0.65);
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
      }};
`
