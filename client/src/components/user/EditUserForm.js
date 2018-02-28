import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class EditUserForm extends Component {
  render() {
    return (
      <div>
        Hello From edit user form
      </div>
    );
  }
}

export default connect(null, {push}) (EditUserForm)