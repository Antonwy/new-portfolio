import React from 'react';
import styled from 'styled-components';

import Github from '../Assets/githubIcon.svg';
import Open from '../Assets/openIcon.svg';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';

const Bubble = styled(motion.div)`
  background-image: ${(props) =>
    `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
  display: flex;
  flex-direction: column;
  align-items: start;
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

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 4px;
  ${'' /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */}
`;

const TextSpacer = styled(motion.div)`
  margin-left: 40px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 20px;
    padding-bottom: 40px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 27px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    font-size: 1.5em;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 15px;

  @media (max-width: 1200px) {
    font-size: 1em;
  }
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.navBarHighlight};
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
  margin-top: 12px;
  display: flex;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const SkillTag = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
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

const WorkItem = ({
  color,
  title,
  description,
  url,
  imageUrl,
  github,
  skills,
}) => {
  const skillItems = [];

  for (const skill of skills) {
    skillItems.push(
      <SkillTag color={color.to}>{skill.attributes.type}</SkillTag>
    );
  }

  return (
    <Bubble variants={bubbleVariant} color={color}>
      <Image src={imageUrl} />
      <Title>{title}</Title>
      <Text>{description}</Text>
      <SkillContainer>{skillItems}</SkillContainer>
      <Container>
        {url ? (
          <Button color={color}>
            <img width="20" src={Open} onClick={openLink(url)}></img>
          </Button>
        ) : (
          <div></div>
        )}
        {github ? (
          <Button
            style={{ marginLeft: url ? '10px' : '0' }}
            color={color}
            icon={Github}
          >
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
