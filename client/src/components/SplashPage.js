import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import Navbar from './navbar/Navbar'

class SplashPage extends Component {
  render() {
    return (

      <Container>
        <Navbar/>
        <h1>Innovation Station</h1>
        <p>Innovation station is an application that connects thought leaders (innovators) 
        in their field with users through workshops and one on ones. It is so important 
        to share knowledge and this app gives innovators the chance to share and users the 
        chance to soak up knowledge nuggets.  </p>
      </Container>

    );
  }
}

export default connect(null, {push})(SplashPage)

// Styled-Components

const Container = styled.div `
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: 45px;
    h1{
    display:flex;
    justify-content:center;
    width:75vw;
    color: black;
    font-size: 85px;
    }
    p{
      display:flex;
      justify-content:center;
      width:75vw;
      font-size: 25px;  
      }
    `