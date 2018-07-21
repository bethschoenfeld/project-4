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
          <Navbar />
          <h1>
            {this.state.userBeingEdited.username}
          </h1>
          <h3>
            Username:
          </h3>
          <input
            className="editUser"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.username}/>
          <h3>
            Email:
          </h3>
          <input
            className="editUser"
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.email}/>
          <h3>
            Picture:
          </h3>
          <input
            className="editUser"
            type="text"
            name="picture"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.picture}/>
        <button onClick={this.handleEditedUser}>
          Save
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
      background:rgba(255,255,255,0.45);
      cursor: pointer;
      &:hover{
        color: white;
      background:rgba(0,0,0,0.85);
      }};
`