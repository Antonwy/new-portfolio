import React, { Component } from 'react'
import styled from 'styled-components'
import HomeStyle from '../Assets/home_style_dark.svg'
import NavBar from './NavBar';
import { Container, Card, Button } from './GlobalStyles'
import { SMALL } from '../ScreenSizes';

const Header = styled.h1`
    color: #D0C9FF;
    margin: 0;
    margin-top: 80px;
    font-size: 3.5em;

    @media (max-width: ${SMALL}px) {
        font-size: 2em;
    }

`

const SubHeader = styled.p`
    color: #786EBC;
    margin-left: 5px;
    margin-top: 20px;
`



export default class Home extends Component {
  render() {
    return (
        <Container>
           <Card image={HomeStyle}>
                <NavBar index="0" />
                <Header>HI I’M ANTON WYROWSKI</Header>
                <SubHeader>I’m a german Software developer.</SubHeader>
                <Button to="/aboutMe">Learn more</Button>
            </Card> 
        </Container>
        
    )
  }
}
