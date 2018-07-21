import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getUserRoute, deleteUserFromDatabase} from '../../actions/thunk.users.js'
import Navbar from '../navbar/Navbar.js'


class UserPage extends Component {

  componentWillMount() {
    this.props
      .getUserRoute()
  }


  render() {
    return (
      <Body>
      <Navbar/>  
        <Header>
          <div>All Users</div>
        </Header>

        
        <Container>

          {this
            .props
            .users
            .map((user, i) => {
              return (
                <UserBox key={i}>
                  <div onClick={() => this.props.push(`/users/${user.id}/profile`)}>
                    <h2> {user.username} <br/></h2>
                    <img width="200" src={user.picture} alt={user.username}/>
                  </div>

                  <div>
                    <button onClick={() => this.props.push(`/users/${user.id}/edit`)}>
                      Edit
                    </button>

                    <button onClick={() => this.props.deleteUserFromDatabase(user)}>
                      Delete
                    </button>
                  </div>
                </UserBox>
              )
            })}

        </Container>

        <div>
          <button onClick={() => this.props.push(`/users/new`)}>
            New User
          </button>
        </div>

      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {push, getUserRoute, deleteUserFromDatabase})(UserPage)



const Body = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    top: 50px;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
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
      background:rgba(0,0,0,.85);
      }};
`

const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    margin: 40px;
`;

const Header = styled.div `
    margin: 40px auto;
    font-size: 10vh;
`;

const UserBox = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    font-size: 2.25vh;
    h2{
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
    img {
      object-fit:cover;
      width: 15vh;
      height:15vh;
      align-self: center;
      margin:5px;
    }
    button{
      border:1px solid black;
      background:none;
      width: 125px;
      height: 45px;
      font-size: 15px;
      cursor: pointer;
      &:hover{
      color:white;
      background:rgba(0,0,0,.85)
      }
`;