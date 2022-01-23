import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Card,
  Button,
  ContentContainer,
  TextUnderline,
} from './GlobalStyles';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';
import { slideInVariants, staggerContainerVariants } from '../MotionVariants';

const Header = styled(motion.h1)`
  color: ${(props) => props.theme.textColored};
  margin: 0;
  margin-top: 80px;
  font-size: 3.5em;
  z-index: 20;

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

const ThemeChooserContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const ThemeButton = styled(motion.div)`
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

export const HireMeButton = styled(motion.div)`
  width: 150px;
  text-align: center;
  margin-top: 30px;
  border: 2px solid ${(props) => props.theme.textDark};
  padding: 10px 0px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColored};
  transition: box-shadow 500ms, color 250ms;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.textDark};
  font-size: 15px;
  color: #fff;

  &:hover {
    box-shadow: 0 0 20px -2px ${(props) => props.theme.textDark};
    color: #fff;
  }

  @media (max-width: ${SMALL}px) {
    margin: 20px auto;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonSpacer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const buttonVariants = {
  enter: {
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.5 },
    y: 0,
    opacity: 1,
  },
  init: {
    y: 20,
    scale: 0,
    opacity: 0,
  },
  exit: {
    scale: 0,
  },
};

const themeButtonVariants = {
  enter: {
    transition: { ease: 'easeOut', duration: 0.5 },
    y: 0,
    opacity: 1,
  },
  init: {
    y: 100,
    opacity: 0,
  },
  exit: {
    opacity: 0,
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
        <ContentContainer as={motion.div} variants={staggerContainerVariants}>
          <Header variants={slideInVariants}>
            HI I’M <TextUnderline>ANTON WYROWSKI</TextUnderline>
          </Header>
          <SubHeader variants={slideInVariants}>
            I’m a german Software developer.
          </SubHeader>
          <ButtonSpacer>
            <Button variants={buttonVariants} to="/aboutMe">
              Learn More
            </Button>
            <HireMeButton
              onClick={() => window.open('https://it.antonwy.tech', '_blank')}
              variants={buttonVariants}
            >
              Hire me 🥳
            </HireMeButton>
          </ButtonSpacer>
        </ContentContainer>

        <ThemeChooserContainer variants={staggerContainerVariants}>
          <ThemeButton
            onClick={changeThemeFunc(false)}
            active={dark ? false : true}
            variants={themeButtonVariants}
          >
            Light
          </ThemeButton>
          <ThemeButton
            onClick={changeThemeFunc(true)}
            active={dark ? true : false}
            variants={themeButtonVariants}
          >
            Dark
          </ThemeButton>
        </ThemeChooserContainer>
      </Card>
    </Container>
  );
};

export default Home;
