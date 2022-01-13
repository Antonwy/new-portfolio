import React from 'react';
import {
  Container,
  Card,
  TextUnderline,
  AsyncContainer,
  AsyncState,
} from './GlobalStyles';
import styled from 'styled-components';
import { SMALL, SUPER_SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';
import ANTON from '../Assets/anton.jpg';
import { slideInVariants, staggerContainerVariants } from '../MotionVariants';
import { baseUrl, useAboutMe } from '../API';
import ReactMarkdown from 'react-markdown';

const Content = styled.div`
  width: calc(100% - 160px);
  min-height: calc(100% - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 80px;

  @media (max-width: ${SMALL}px) {
    width: 100%;
    min-height: unset;
    padding: 0px;
    padding-top: 80px;
  }

  @media (max-width: 1000px) {
    padding-top: 80px;
    flex-direction: column;
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

  @media (max-width: 1000px) {
    font-size: 60px;
    text-align: center;
  }
`;

const Text = styled(ReactMarkdown)`
  color: ${(props) => props.theme.textNormal};
  max-width: 600px;
  line-height: 30px;

  @media (max-width: 1000px) {
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
  background-image: url(${(props) => props.url});
  width: 35vw;
  height: 35vw;
  max-width: 400px;
  max-height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: ${SMALL}px) {
    width: 80vw;
    height: 80vw;
  }
`;

const TextSpacer = styled(motion.div)`
  margin-left: 40px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 20px;
    padding-bottom: 40px;
  }
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

const AboutMe = ({ theme }) => {
  const [res, loading, error] = useAboutMe();

  const state = () => {
    if (error) return AsyncState.error;
    if (loading) return AsyncState.loading;
    if (res) return AsyncState.done;
  };

  return (
    <AsyncContainer theme={theme} state={state()} image="">
      <Card center>
        <Content>
          <Image
            url={
              baseUrl +
              (res?.attributes?.image?.data?.attributes?.formats?.large?.url ??
                '')
            }
            variants={imageVariants}
          />
          <TextSpacer variants={staggerContainerVariants}>
            <Header variants={slideInVariants}>
              About <TextUnderline>me</TextUnderline>
            </Header>
            <motion.div variants={slideInVariants}>
              <Text children={res?.attributes?.text ?? ''} />
            </motion.div>
          </TextSpacer>
        </Content>
      </Card>
    </AsyncContainer>
  );
};

export default AboutMe;
