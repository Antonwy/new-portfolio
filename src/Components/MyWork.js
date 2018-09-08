import React from 'react'
import { Container, Card } from './GlobalStyles'
import NavBar from './NavBar';
import WorkItem from './WorkItem'
import styled from 'styled-components'
import { SMALL } from '../ScreenSizes';

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
    'lt lt0 lt1 mt mt0 mt1 rt rt0 rt1'
    'lm lm0 lm1 mm mm0 mm1 rm rm0 rm1'
    'lb lb0 lb1 mb mb0 mb1 rb rb0 rb1';
    padding: 40px;
    z-index: 2;

    @media (max-width: ${SMALL}px) {
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin-top: 20px;
    }

`

const MyWork = () => {
  return (
    <Container>
        <Card>
            <NavBar index="2"/>
            <Grid>
                <WorkItem 
                    size={12} 
                    color={{from: "#4040F4", to: "#713FFA"}} 
                    gridArea="lt0" 
                    title="FoodAssistant"
                    url="http://159.69.117.200/#/dashboard"
                    />
                <WorkItem 
                    size={11} 
                    color={{from: "#3FC8FA", to: "#4040F4"}} 
                    gridArea="mm" 
                    title="TodoList"
                    url="https://antonwy.github.io/todo-list/"
                    />
                <WorkItem 
                    size={13} 
                    color={{from: "#40AFF4", to: "#3FFA87"}} 
                    gridArea="rt" 
                    title="Portfolio1"
                    url="https://antonwy.github.io/portfolio_website/"
                    />
                <WorkItem 
                    size={12} 
                    color={{from: "#8967E8", to: "#612DB5"}} 
                    gridArea="rm0" 
                    title="Portfolio2"
                    url="https://antonwy.github.io/my_portfolio/"
                    />
                <WorkItem 
                    size={16} 
                    color={{from: "#F44040", to: "#713FFA"}} 
                    gridArea="lm" 
                    title="Apps"
                    url="http://antonwy.bplaced.net/#"
                    />
                <WorkItem 
                    size={13} 
                    color={{from: "#B9FA3F", to: "#5AD0A7"}} 
                    gridArea="rb" 
                    title="Takis"
                    url="https://antonwy.github.io/takis_web/"
                    />
                <WorkItem 
                    size={14} 
                    color={{from: "#F4AF40", to: "#F4D15C"}} 
                    gridArea="lb0" 
                    title="Weather"
                    url=""
                    />
            </Grid>
            
        </Card>
    </Container>
  )
}

export default MyWork
