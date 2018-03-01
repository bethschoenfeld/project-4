import React, { Component } from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {getInnovatorRoute} from '../../actions/thunk.innovators.js'
import Navbar from '../navbar/Navbar.js'


class InnovatorPage extends Component {

  componentWillMount() {
      this.props
      .getInnovatorRoute()
  }
  render() {
    return ( 
    <Body>
      <Navbar/>
        <div>
          <h2>Innovator Page</h2>
        </div>
        <br/>
        <Container>
          {this.props.innovators
            .map((innovator, i) => {
              return (
                <InnovatorBox key={i}>
                  <InnovatorTitle>
                    <div>
                      {innovator.name}
                    </div>
                  </InnovatorTitle>

                  <div onClick={() => this.props.push(`/innovators/${innovator.id}/profile`)}>
                    <img src={innovator.picture} alt={innovator.name}/>
                  </div>

                  
                </InnovatorBox>
              )
            })}

        </Container>
      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return {innovators: state.innovators}
}
export default connect(mapStateToProps, {push, getInnovatorRoute})(InnovatorPage)



const Body = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    top: 50px;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      background:rgba(255,255,255,0.45);
      width:30vh;
      height: 4vh;
    }
    button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      width: 20vh;
      height: 5vh;
      padding:7.5px;
      font-size: 15px;
      text-align: center;
      margin:5px;
      font-family: 'Montserrat', sans-serif;
      background:rgba(255,255,255,0.45);
      border-radius: 5px;
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
`;

const InnovatorTitle = styled.div `
    display: flex;
    flex-direction: row;
    width: 70vh;
    justify-content: flex-end;
    align-items: center;
    margin:5px;
    padding:5px;`

const InnovatorBox = styled.div `
    width: 40vh;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    border: 1px solid darkgray;
    background: rgba(255,255,255,0.55);
    font-size: 2.25vh;
    cursor: pointer;
    box-shadow: 3px 3px 0px #3f3f3f;
    img {
        width: 38vh;
    height:25vh;
    border: 1px solid darkgray;
    box-shadow: 1.5px 1.5px 0px #7e7e7e;
    align-self: center;
    margin:5px;
    }&:hover{
        color: #696969;
        transform:translateY(2px);
        box-shadow: 1.5px 1.5px 0px #7e7e7e;
        z-index: 3;
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
      border-radius: 5px;
      cursor: pointer;
      &:hover{
      background:rgba(0,0,0,0.15)
      }
`;