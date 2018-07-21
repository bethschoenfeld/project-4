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
        <Header>
        <div>Innovator Page</div>
        </Header>
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
const Header = styled.div `
    margin: 40px auto;
    font-size: 10vh;
`;

const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    margin: 40px;
`;

const InnovatorTitle = styled.div `
    display: flex;
    flex-direction: column;
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
    background: rgba(255,255,255,0.55);
    font-size: 2.25vh;
    cursor: pointer;
    img {
      object-fit:contain;
      width: 38vh;
      height:25vh;
      align-self: center;
      margin:5px;
    }&:hover{
        color: #696969;
    }
`;