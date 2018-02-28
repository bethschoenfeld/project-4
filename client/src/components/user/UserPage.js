import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class UserPage extends Component {
  render() {
    return (
      <div>
        Hello from UserPage
      </div>
    );
  }
}

export default connect(null, {push}) (UserPage)