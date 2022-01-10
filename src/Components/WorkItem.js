import React from 'react';
import styled from 'styled-components';

import Github from '../Assets/githubIcon.svg';
import Open from '../Assets/openIcon.svg';
import { slideInVariants } from '../MotionVariants';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';

const Bubble = styled(motion.div)`
  background-image: ${(props) =>
    `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  position: relative;
  padding: 30px;
  margin: 20px;

  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border-radius: 5px;
    background-image: ${(props) =>
      `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    z-index: -1;
    opacity: 0.2;
  }

  @media (max-width: ${SMALL}px) {
    margin: 15px 0;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 17px;

  @media (max-width: 1200px) {
    font-size: 1em;
  }
`;

const Button = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 23px;
  background-image: ${(props) =>
    `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
`;

const openLink = (url) => () => {
  window.open(url, '_blank');
};

const generateLink = (url) => () => {
  let name = url.replace('https://antonwy.github.io/', '');
  let finalURL = `https://github.com/Antonwy/${name}`;
  window.open(finalURL, '_blank');
};

const bubbleVariant = {
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
    x: 0,
    y: 0,
  },
  init: {
    scale: 0.5,
    opacity: 0,
    x: 0,
    y: 100,
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.5 },
    x: 0,
    y: 200,
  },
};

const WorkItem = ({ size, color, gridArea, title, url, github }) => {
  return (
    <Bubble
      variants={bubbleVariant}
      size={size}
      color={color}
      gridArea={gridArea}
    >
      <Title>{title}</Title>
      <Container>
        <Button color={color}>
          <img width="20" src={Open} onClick={openLink(url)}></img>
        </Button>
        {github ? (
          <Button style={{ marginLeft: '10px' }} color={color} icon={Github}>
            <img
              width="20"
              src={Github}
              onClick={
                typeof github === 'boolean'
                  ? generateLink(url)
                  : openLink(github)
              }
            ></img>
          </Button>
        ) : (
          <div></div>
        )}
      </Container>
    </Bubble>
  );
};

export default WorkItem;
