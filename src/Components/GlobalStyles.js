import styled from 'styled-components';
import { SMALL } from '../ScreenSizes';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FoldingCube } from 'better-react-spinkit';

const list = {
  enter: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  init: {
    opacity: 0,
  },
};

export const TextUnderline = styled.span`
  position: relative;
  z-index: 2;

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: 0px;
    left: -10px;
    width: calc(100% + 20px);
    height: 25px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.navBarHighlight};
  }

  @media (max-width: ${SMALL}px) {
    &:before {
      display: none;
    }
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image.normal});
  background-position: ${(props) =>
    props.center ? 'bottom right' : 'bottom center'};
  background-repeat: no-repeat;
  background-size: 100%;
  position: fixed;

  @media (max-width: ${SMALL}px) {
    background-image: url(${(props) => props.image.mobile});
    background-size: 135%;
  }
`;

export const Container = ({ children, image }) => (
  <motion.div initial="init" animate="enter" exit="exit" variants={list}>
    <StyledContainer image={image}>{children}</StyledContainer>
  </motion.div>
);

export const AsyncState = { loading: 0, done: 1, error: 2 };

const loadingIndicatorVariants = {
  enter: {
    opacity: 0,
  },
  loading: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  init: {
    opacity: 1,
  },
};

export const AsyncContainer = ({ children, image, state, theme }) => {
  const controls = useAnimation();

  useEffect(() => {
    console.log(state);
    switch (state) {
      case AsyncState.loading:
        controls.start('loading');
      case AsyncState.done:
        controls.start('enter');
      case AsyncState.error:
        controls.start('error');
    }
  }, [state]);

  return (
    <div>
      <CenteredContainer
        layout
        initial="init"
        animate={controls}
        exit="exit"
        variants={loadingIndicatorVariants}
      >
        <FoldingCube size={30} color={theme.textColored}></FoldingCube>
      </CenteredContainer>
      <motion.div initial="init" animate={controls} exit="exit" variants={list}>
        <StyledContainer image={image}>{children}</StyledContainer>
      </motion.div>
    </div>
  );
};

export const CenteredContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
`;

export const ContentContainer = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SMALL}px) {
    padding-left: 0px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  padding-top: 80px;
  overflow: auto;

  @media (max-width: ${SMALL}px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 25px 20px 0 20px;
    border-radius: 0px;
  }
`;

export const Button = styled(motion(Link))`
  width: 150px;
  text-align: center;
  margin-top: 30px;
  ${'' /* background-color: ${props => props.theme.textDark}; */}
  border: 2px solid ${(props) => props.theme.textDark};
  padding: 10px 0px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColored};
  transition: box-shadow 500ms, color 250ms;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px -2px ${(props) => props.theme.textDark};
    color: #fff;
  }

  &:hover:before {
    width: 100%;
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.textDark};
    transition: width 250ms;
    z-index: -2;
  }

  @media (max-width: ${SMALL}px) {
    margin: 20px auto;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
`;
