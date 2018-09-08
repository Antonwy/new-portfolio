import React from 'react'
import { Container, Card } from './GlobalStyles'
import NavBar from './NavBar'
import styled from 'styled-components'
import { SMALL } from '../ScreenSizes';


const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Header = styled.h1`
    color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,.5);
    margin-bottom: 30px;
`

const Text = styled.p`
    color: white;
    max-width: 400px;
    width: 90%;
    text-align: center;
    text-shadow: 0 2px 6px rgba(0,0,0,.5);

    @media (max-width: 350px) {
        font-size: .75em;
    }

    @media (max-width: ${SMALL}px) {
        font-size: .9em;
    }
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.theme.images.about.normal});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100%;
    top: 0;
    left: 0;
    z-index: -5;
    

    @media (max-width: ${SMALL}px) {
        background-size: 120%;
        background-image: url(${props => props.theme.images.about.mobile});
    }
`

const AboutMe = (props) => {
  return (
    <Container>
      <Card image="" center>
        <NavBar index="1"/>
        <Content>
            <Header>About me</Header>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
        </Content>
        <Background />
      </Card>
    </Container>
  )
}

export default AboutMe
