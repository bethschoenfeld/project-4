import React, { Component } from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'


class NewUserForm extends Component {
  render() {
    return (
      <div>
        Hello fron new user form! 
      </div>
    );
  }
}

export default connect(null, {push}) (NewUserForm)