import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getOneUserRoute} from '../../actions/thunk.users.js'
import NavBar from '../navbar/NavBar.js'

class UserProfile extends Component {

  componentWillMount() {
      const userId = this.props.match.params.userId;
      this.props
          .getOneUserRoute(userId)
      
  }
  componentWillReceiveProps(nextProps) {
      this.setState(
        {singleUser: {
          id: this.props.match.params.userId,
          username: nextProps.singleUser.username,
          email: nextProps.singleUser.email,
          picture: nextProps.singleUser.picture,

      }}
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
      return (
          
          <Container>
              <div>
              <Navbar />
              </div>
              <h3>User Profile</h3>
              <br/>
              <img src={this.state.singleUser.picture} alt={this.state.singleUser.username}/>
              <h1>{this.state.singleUser.email}</h1>
          </Container>
          
      );
  }
}

const mapStateToProps = (state) => {
  return {singleUser: state.users[0]}
}

export default connect(mapStateToProps, {getOneUserRoute})(UserProfile);





