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
        <button onClick={() => this.props.push('/')}>
          Home
        </button>
        <Header>
          <div>All Users</div>
        </Header>
        <div>
          <button onClick={() => this.props.push(`/users/new`)}>
            New User
          </button>
        </div>
        
        <Container>

          {this
            .props
            .users
            .map((user, i) => {
              return (
                <UserBox key={i}>
                  <div onClick={() => this.props.push(`/users/${user.id}/profile`)}>
                    <img width="200" src={user.picture} alt={user.username}/>
                    <br/> {user.username}
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
    position: absolute; 
    top: 50px;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
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

const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    font-family: 'Montserrat', sans-serif;
    margin: 40px;
    a{
        text-decoration: none;
        color:black;
        &:hover{
        color: #696969;
        transform:translateY(2px);
        text-shadow: 0px 0px 0px #bdbdbd;
        z-index: 3;
    }
    }
`;

const Header = styled.h1 `
    margin: 40px auto;
    
    font-size: 3vh;
    text-shadow: 1.5px 1.5px 0px whitesmoke;
    /* border-bottom: thin solid white; */
`;

const UserBox = styled.div `
    width: 27.5vh;
    height: 27.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    /* border: 1px solid darkgray; */
    background: rgba(255,255,255,0.55);
    font-size: 2.25vh;
    /* box-shadow: 3px 3px 0px #3f3f3f; */
    img {
        width: 15vh;
    height:15vh;
    
    align-self: center;
    margin:5px;
    }&:hover{
        color: #696969;
        transform:translateY(2px);
        z-index: 3;
    }
    input{
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      width: 20vh;
    }
    button{
      border:1px solid black;
      background:none;
      width: 75px;
      height: 30px;
      padding:7.5px;
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
      flex-self:center;
      cursor: pointer;
      &:hover{
      background:rgba(0,0,0,0.15)
      }
`;