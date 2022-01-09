import React, { Component, useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Container, Card, Button, ContentContainer } from './GlobalStyles';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';

const Header = styled(motion.h1)`
  color: ${(props) => props.theme.textColored};
  margin: 0;
  margin-top: 80px;
  font-size: 3.5em;

  @media (max-width: ${SMALL}px) {
    font-size: 2em;
    text-align: center;
  }
`;

const SubHeader = styled(motion.p)`
  color: ${(props) => props.theme.textDark};
  margin-left: 5px;
  margin-top: 20px;

  @media (max-width: ${SMALL}px) {
    text-align: center;
    width: 70%;
    margin: 20px auto 0 auto;
  }
`;

const ThemeChooserContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const ThemeButton = styled.div`
  width: 75px;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  color: ${(props) => (props.active ? 'black' : props.theme.textColored)};
  margin-bottom: 20px;
  padding: 7px 0;
  border-radius: 1000px;
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
  transition: background 500ms, transform 250ms;

  &:hover {
    transform: scale(0.85);
  }
`;

const containerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.2,
      duration: 2,
    },
  },
  init: {},
  exit: {
    transition: {
      staggerChildren: 0.1,
      duration: 2,
    },
  },
};

const headerVariants = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'anticipate', duration: 1 },
    x: 0,
  },
  init: {
    x: 0,
    scale: 0.5,
    opacity: 0,
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

const buttonVariants = {
  enter: {
    scale: 1,
    transition: { ease: 'anticipate', duration: 1 },
  },
  init: {
    scale: 0,
  },
  exit: {
    scale: 0,
  },
};

const Home = ({ theme, changeTheme }) => {
  const [dark, setDark] = useState(theme.dark);

  const changeThemeFunc = (tf) => (event) => {
    event.preventDefault();
    setDark(tf);
    changeTheme(tf);
  };

  return (
    <Container image={theme.images.home}>
      <Card>
        <ContentContainer as={motion.div} variants={containerVariants}>
          <Header variants={headerVariants}>HI I’M ANTON WYROWSKI</Header>
          <SubHeader variants={headerVariants}>
            I’m a german Software developer.
          </SubHeader>
          <Button variants={buttonVariants} to="/aboutMe">
            Learn More
          </Button>
        </ContentContainer>

        <ThemeChooserContainer>
          <ThemeButton
            onClick={changeThemeFunc(false)}
            active={dark ? false : true}
          >
            Light
          </ThemeButton>
          <ThemeButton
            onClick={changeThemeFunc(true)}
            active={dark ? true : false}
          >
            Dark
          </ThemeButton>
        </ThemeChooserContainer>
      </Card>
    </Container>
  );
};

export default Home;
