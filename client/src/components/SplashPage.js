import React, { Component } from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class SplashPage extends Component {
  render() {
    return (
      <div>
        WASSUP
      </div>
    );
  }
}

export default connect(null, {push}) (SplashPage)