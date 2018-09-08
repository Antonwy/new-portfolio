import React from 'react'
import { Container, Card } from './GlobalStyles'
import styled from 'styled-components'
import NavBar from './NavBar';


import Github from '../Assets/githubIcon.svg'
import Twitter from '../Assets/twitterIcon.svg'
import Gmail from '../Assets/gmailIcon.svg'
import Insta from '../Assets/instaIcon.svg'
import Facebook from '../Assets/facebookIcon.svg'
import { SMALL } from '../ScreenSizes';

const Rect = styled.div`
    background-image: linear-gradient(-45deg, #33249D 0%, #8650FF 100%);
    width: 400px;
    height: 400px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;

    @media (max-width: ${SMALL}px) {
        width: 400px;
        height: 400px;
    }
`

const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.h1`
    color: white;
`

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`

const P = styled.a`
    color: white;
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
`

const Contact = () => {
  return (
    <Container>
      <Card>
        <NavBar index="3" />
        <Center>
            <Rect>
                <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: 'rotate(-45deg)'}}>
                    <Header>Contact</Header>
                    <ListItem>
                        <img width="30" src={Github}/>
                        <P>Antonwy</P>
                    </ListItem>
                    <ListItem>
                        <img width="30" src={Gmail}/>
                        <P>anton.wyrowski@gmail.com</P>
                    </ListItem>

                    <ListItem>
                        <img width="30" src={Facebook}/>
                        <P>Anton Wyrowski</P>
                    </ListItem>
                    <ListItem>
                        <img width="30" src={Twitter}/>
                        <P>antonwyro</P>
                    </ListItem>
                    <ListItem>
                        <img width="30" src={Insta}/>
                        <P>antonwy</P>
                    </ListItem>
                </div>
            </Rect>
        </Center>
      </Card>
    </Container>
  )
}

export default Contact
