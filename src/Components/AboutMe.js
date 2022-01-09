import React from 'react';
import { Container, Card } from './GlobalStyles';
import NavBar from './NavBar';
import styled from 'styled-components';
import { SMALL } from '../ScreenSizes';

import ANTON from '../Assets/anton.jpg';

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 40px;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.textColored};
  font-size: 80px;
  margin-bottom: 30px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.textNormal};
  max-width: 600px;
  width: 90%;

  @media (max-width: 350px) {
    font-size: 0.75em;
  }

  @media (max-width: ${SMALL}px) {
    font-size: 0.9em;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.theme.images.about.normal});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 1200px;
  bottom: 0;
  left: 0;
  z-index: -5;

  @media (min-height: 1200px) {
    background-size: 200%;
  }

  @media (max-width: ${SMALL}px) {
    background-size: 100%;
    background-position-y: -100%;
    background-image: url(${(props) => props.theme.images.about.mobile});
  }

  @media (max-width: 600px) {
    background-position-y: 100%;
  }
`;

const Image = styled.div`
  background-image: url(${ANTON});
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.textDark};
`;

const AboutMe = (props) => {
  return (
    <Container>
      <Card image="" center>
        <NavBar index="1" />
        <Content>
          <Image />
          <div style={{ marginLeft: 40 }}>
            <Header>About me</Header>
            <Text>
              Hi I’m Anton Wyrowski!
              <br />
              I’m currently living in Munich, Germany to study Computer Science
              at the Technical University of Munich.
              <br />
              <br />
              By now, I have programmed multiple Websites and Apps which you can
              check out by clicking on 'My work'.
              <br />
              <br />
              In addition to my studies, I also founded a startup with a friend,
              which develops an app with which you can quickly and easily donate
              to a wide variety of charities.
              <br />
              For more information click{' '}
              <Link href="https://one-dollar-movement.com" target="_blank">
                here
              </Link>
            </Text>
          </div>
        </Content>
      </Card>
    </Container>
  );
};

export default AboutMe;
