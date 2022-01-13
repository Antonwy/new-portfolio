import React from 'react';
import { Container, Card, AsyncContainer, AsyncState } from './GlobalStyles';
import WorkItem from './WorkItem';
import styled from 'styled-components';
import { SMALL } from '../ScreenSizes';
import { motion } from 'framer-motion';
import { staggerContainerVariants } from '../MotionVariants';
import { baseUrl, useMyWork } from '../API';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 80px;
  z-index: 2;

  @media (max-width: ${SMALL}px) {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: 100%;
    padding: 20px 10px;
    margin-top: 40px;
  }
`;

const MyWork = ({ theme }) => {
  const [res, loading, error] = useMyWork();

  const items = [];

  for (const item of res ?? []) {
    items.push(
      <WorkItem
        color={{ from: item.attributes.fromColor, to: item.attributes.toColor }}
        title={item.attributes.title}
        key={item.attributes.title}
        description={item.attributes.description}
        imageUrl={baseUrl + item.attributes.image.data.attributes.url}
        url={item.attributes.url}
        github={item.attributes.github}
      />
    );
  }

  const state = () => {
    if (error) return AsyncState.error;
    if (loading) return AsyncState.loading;
    if (res) return AsyncState.done;
  };

  return (
    <AsyncContainer state={state()} image="" theme={theme}>
      <Card className="scroll-listenable">
        <Grid variants={staggerContainerVariants}>{items}</Grid>
      </Card>
    </AsyncContainer>
  );
};

export default MyWork;
