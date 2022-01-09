import React from 'react';
import { Container, Card } from './GlobalStyles';
import WorkItem from './WorkItem';
import styled from 'styled-components';
import { SMALL } from '../ScreenSizes';

// const AnimatedGrid = posed.div({
//   enter: {
//     staggerChildren: 150,
//     delayChildren: 200,
//   },
//   exit: {
//     staggerChildren: 150,
//     delayChildren: 200,
//   },
// });

const Grid = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-areas:
    'lt lt0 lt1 mt mt0 mt1 rt rt0 rt1'
    'lm lm0 lm1 mm mm0 mm1 rm rm0 rm1'
    'lb lb0 lb1 mb mb0 mb1 rb rb0 rb1';
  padding: 80px;
  z-index: 2;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: calc(100% - 160px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow: space-between;
    padding: 80px;
    margin-top: 20px;
    overflow-y: auto;
  }

  @media (max-width: ${SMALL}px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0px;
    margin-top: 20px;
    overflow: auto;
  }
`;

const MyWork = () => {
  return (
    <Container image="">
      <Card>
        <Grid>
          <WorkItem
            size={12}
            color={{ from: '#4040F4', to: '#713FFA' }}
            gridArea="lt0"
            title="Chat App"
            url="https://chat.antonwy.com"
            github="https://github.com/Antonwy/chat-app"
          />
          <WorkItem
            size={10}
            color={{ from: '#F44040', to: '#713FFA' }}
            gridArea="lm"
            title="Apps"
            url="https://apps.antonwy.com"
          />
          <WorkItem
            size={13}
            color={{ from: '#3FC8FA', to: '#4040F4' }}
            gridArea="mm"
            title="GOT"
            url="https://got.antonwy.com"
            github="https://github.com/Antonwy/got-web-page"
          />
          <WorkItem
            size={11}
            color={{ from: '#40AFF4', to: '#3FFA87' }}
            gridArea="rt"
            title="Portfolio 1"
            url="https://antonwy.github.io/portfolio_website/"
            github
          />
          <WorkItem
            size={12}
            color={{ from: '#8967E8', to: '#612DB5' }}
            gridArea="rm0"
            title="Portfolio 2"
            url="https://antonwy.github.io/my_portfolio/"
            github
          />
          <WorkItem
            size={11}
            color={{ from: '#B9FA3F', to: '#5AD0A7' }}
            gridArea="rb"
            title="TodoList"
            url="https://antonwy.github.io/todo-list/"
            github
          />
          <WorkItem
            size={10}
            color={{ from: '#F4AF40', to: '#F4D15C' }}
            gridArea="lb0"
            title="Wikipedia"
            url="https://antonwy.github.io/wiki-web/#/"
            github
          />
        </Grid>
      </Card>
    </Container>
  );
};

export default MyWork;
