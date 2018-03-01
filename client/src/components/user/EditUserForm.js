import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {editUserInDatabase, getOneUserRoute} from '../../actions/thunk.users.js'
import Navbar from '../navbar/Navbar.js'

class EditUserForm extends Component {

  componentDidMount() {
    this.props
    .getOneUserRoute(this.props.match.params.userId)
  }

  componentWillReceiveProps(editedProps) {
    this.setState({
      userBeingEdited: {
        id: this.props.match.params.userId,
        username: editedProps.userBeingEdited.username,
        email: editedProps.userBeingEdited.email,
        picture: editedProps.userBeingEdited.picture
      }
    })
  }

  state = {
    userBeingEdited: {
      id: "",
      username: "",
      email: "",
      picture: ""
    }
  }

  handleChange = (event) => {
    const updatedUser = {
      ...this.state.userBeingEdited
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue
    this.setState({userBeingEdited: updatedUser})
  }

  handleEditedUser = () => {
    this.props
    .editUserInDatabase(this.state.userBeingEdited)
    .then((response) => {
      (this.props.push(`/users`))
    })
  }
  render() {
    return (
      <Container>
        <div>
          <Navbar />
          </div>
        <div>
          <h2>
            {this.state.userBeingEdited.username}</h2>
        </div>
        <div>
          <div>
            Username:</div>
          <input
            className="editUser"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.username}/>
        </div>
        <div>
          <div>
            Email:</div>
          <input
            className="editUser"
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.email}/>
        </div>
        <div>
          <div>
            Picture:</div>
          <input
            className="editUser"
            type="text"
            name="picture"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.picture}/>
        </div>
        <button onClick={this.handleEditedUser}>
          Edit
        </button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {userBeingEdited: state.users[0]}
}

export default connect(mapStateToProps, {getOneUserRoute, editUserInDatabase, push}) (EditUserForm)



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
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 0px rgba(0,0,0,0.25);
      border:1px solid black;
      background:none;
      border-radius:3px;
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
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color: white;
      background:rgba(0,0,0,0.15);
      }};
`