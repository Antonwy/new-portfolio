import React from 'react';
import styled from 'styled-components';

import Github from '../Assets/githubIcon.svg';
import Open from '../Assets/openIcon.svg';
import { SMALL } from '../ScreenSizes';

// const AnimatedBubble = posed.div({
//   enter: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 500 },
//     x: 0,
//     y: 0,
//   },
//   exit: {
//     scale: 3,
//     opacity: 0,
//     transition: { duration: 500 },
//     x: (Math.random() > 0.5 ? 1 : -1) * Math.random() * 500,
//     y: (Math.random() > 0.5 ? 1 : -1) * Math.random() * 500,
//   },
// });

const Bubble = styled.div`
  width: ${(props) => `${props.size}vw`};
  height: ${(props) => `${props.size}vw`};
  border-radius: 50%;
  background-image: ${(props) =>
    `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
  position: relative;
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: -0.5vw;
    top: -0.5vw;
    width: ${(props) => `${props.size + 1}vw`};
    height: ${(props) => `${props.size + 1}vw`};
    border-radius: 50%;
    background-image: ${(props) =>
      `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    z-index: -1;
    opacity: 0.2;
  }

  @media (max-width: 1200px) {
    width: 48%;
    height: 70px;
    border-radius: 5px;
    background-color: red;
    grid-area: none;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    margin: 10px 0;

    &:before {
      display: none;
    }
  }

  @media (max-width: ${SMALL}px) {
    width: 100%;
    height: 70px;
    min-height: 50px;
    border-radius: 5px;
    background-color: red;
    grid-area: none;
    flex-direction: row;
    justify-content: start;
    margin: 10px 0;

    &:before {
      display: none;
    }
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 17px;

  @media (max-width: 1200px) {
    margin-left: 10px;
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
  margin-top: 10px;
  display: flex;

  @media (max-width: 1200px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: 10px;
  }
`;

const openLink = (url) => () => {
  window.open(url, '_blank');
};

const generateLink = (url) => () => {
  let name = url.replace('https://antonwy.github.io/', '');
  let finalURL = `https://github.com/Antonwy/${name}`;
  window.open(finalURL, '_blank');
};

const WorkItem = ({ size, color, gridArea, title, url, github }) => {
  return (
    <Bubble size={size} color={color} gridArea={gridArea}>
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
