import React from 'react';
import { Container, Card } from './GlobalStyles';
import styled from 'styled-components';
import { MEDIUM, SMALL, SUPER_SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';
import ANTON from '../Assets/anton.jpg';
import { slideInVariants, staggerContainerVariants } from '../MotionVariants';

const Content = styled.div`
  width: calc(100% - 160px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px;

  @media (max-width: ${SMALL}px) {
    width: 100%;
    padding: 0px;
    padding-top: 80px;
  }
`;

const Header = styled(motion.h1)`
  color: ${(props) => props.theme.textColored};
  font-size: 80px;
  margin-bottom: 30px;

  @media (max-width: ${SUPER_SMALL}px) {
    font-size: 20px;
  }

  @media (max-width: ${SMALL}px) {
    font-size: 40px;
  }

  @media (max-width: ${MEDIUM}px) {
    font-size: 60px;
    text-align: center;
  }
`;

const Text = styled(motion.p)`
  color: ${(props) => props.theme.textNormal};
  max-width: 600px;

  @media (max-width: ${MEDIUM}px) {
    text-align: center;
  }

  @media (max-width: ${SUPER_SMALL}px) {
    font-size: 0.75em;
  }

  @media (max-width: ${SMALL}px) {
    font-size: 0.9em;
  }
`;

const Image = styled(motion.div)`
  background-image: url(${ANTON});
  width: 35%;
  aspect-ratio: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: ${SMALL}px) {
    width: 80%;
  }
`;

const TextSpacer = styled(motion.div)`
  margin-left: 40px;

  @media (max-width: ${MEDIUM}px) {
    margin-left: 0;
    margin-top: 20px;
    padding-bottom: 40px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.textDark};
`;

const imageVariants = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
  init: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
  },
};

const AboutMe = (props) => {
  return (
    <Container image="">
      <Card center>
        <Content>
          <Image variants={imageVariants} />
          <TextSpacer variants={staggerContainerVariants}>
            <Header variants={slideInVariants}>About me</Header>
            <Text variants={slideInVariants}>
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
          </TextSpacer>
        </Content>
      </Card>
    </Container>
  );
};

export default AboutMe;
