import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class UserProfile extends Component {
  render() {
    return (
      <div>
        Hello from User Profile
      </div>
    );
  }
}

export default connect(null, {push}) (UserProfile)