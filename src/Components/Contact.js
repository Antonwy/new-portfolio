import React from 'react';
import { Container, Card } from './GlobalStyles';
import styled from 'styled-components';
import Github from '../Assets/githubIcon.svg';
import Twitter from '../Assets/twitterIcon.svg';
import Gmail from '../Assets/gmailIcon.svg';
import Insta from '../Assets/instaIcon.svg';
import Facebook from '../Assets/facebookIcon.svg';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';

const Rect = styled(motion.div)`
  background-image: linear-gradient(
    -45deg,
    ${(props) => props.theme.contactGradient.from} 0%,
    ${(props) => props.theme.contactGradient.to} 100%
  );
  width: 400px;
  height: 400px;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;

  @media (max-width: ${SMALL}px) {
    position: absolute;
    width: 105vw;
    height: 400px;
    transform: rotate(-10deg) skew(-10deg);
  }
`;

const Content = styled.div`
  transform: rotate(45deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SMALL}px) {
    transform: skew(10deg) rotate(10deg);
  }
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled(motion.h1)`
  color: white;
`;

const ListItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const P = styled.a`
  color: white;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const openLink = (url) => () => {
  if (url.charAt(0) !== 'h') {
    window.location = `mailto:${url}`;
  } else {
    window.open(url, '_blank');
  }
};

const staggerContainerVariantsSmallScreen = {
  enter: {
    // rotate: -45,
    skew: -10,
    rotate: -10,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      when: 'beforeChildren',
    },
  },
  init: {
    rotate: 0,
    skew: 0,
    opacity: 0,
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      duration: 2,
    },
  },
};

const staggerContainerVariants = {
  enter: {
    rotate: -45,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      when: 'beforeChildren',
    },
  },
  init: {
    rotate: 0,
    opacity: 0,
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      duration: 2,
    },
  },
};

const slideInVariants = {
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
  init: {
    opacity: 0,
    scale: 0.5,
    y: 20,
  },
  exit: {
    opacity: 0,
  },
};

const Contact = (props) => {
  return (
    <Container image="">
      <Card>
        <Center>
          <Rect
            variants={
              window.innerWidth > SMALL
                ? staggerContainerVariants
                : staggerContainerVariantsSmallScreen
            }
          >
            <Content>
              <Header variants={slideInVariants}>Contact</Header>
              <ListItem
                variants={slideInVariants}
                onClick={openLink('https://github.com/Antonwy')}
              >
                <img width="30" src={Github} />
                <P>Antonwy</P>
              </ListItem>
              <ListItem
                variants={slideInVariants}
                onClick={openLink('anton.wyrowski@gmail.com')}
              >
                <img width="30" src={Gmail} />
                <P>anton.wyrowski@gmail.com</P>
              </ListItem>
              <ListItem
                variants={slideInVariants}
                onClick={openLink('https://www.facebook.com/anton.deutschland')}
              >
                <img width="30" src={Facebook} />
                <P>Anton Wyrowski</P>
              </ListItem>
              <ListItem
                variants={slideInVariants}
                onClick={openLink('https://twitter.com/antonwyro')}
              >
                <img width="30" src={Twitter} />
                <P>antonwyro</P>
              </ListItem>
              <ListItem
                variants={slideInVariants}
                onClick={openLink('https://www.instagram.com/antonwyr/')}
              >
                <img width="30" src={Insta} />
                <P>antonwy</P>
              </ListItem>
            </Content>
          </Rect>
        </Center>
      </Card>
    </Container>
  );
};

export default Contact;
