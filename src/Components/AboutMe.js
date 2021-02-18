import React from 'react';
import { Container, Card } from './GlobalStyles';
import NavBar from './NavBar';
import styled from 'styled-components';
import { SMALL } from '../ScreenSizes';

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Header = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

const Text = styled.p`
  color: white;
  max-width: 400px;
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

const AboutMe = (props) => {
  return (
    <Container>
      <Card image="" center>
        <NavBar index="1" />
        <Content>
          <div>
            <Header>About me</Header>
            <Text>
              Hi I’m Anton Wyrowski! I’m living in Germany and I’m 18 years old.
              <br />
              For 2 years I taught myself how to program and how to build
              Websites and Mobile Apps.
              <br />
              Currently I’m in my last year of school. After the school I intend
              to study computer-science.
            </Text>
          </div>
        </Content>
      </Card>
    </Container>
  );
};

export default AboutMe;
