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
    'lt mt mt0 rt'
    'lm mm mm0 rm'
    'lb mb mb0 rb';
    padding: 40px;
    z-index: 2;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-grow: space-between;
        padding: 0px;
        margin-top: 20px;
        overflow: auto;
    }

    @media (max-width: ${SMALL}px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px;
        margin-top: 20px;
        overflow: auto;
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
                    gridArea="lt" 
                    title="FoodAssistant"
                    url="http://159.69.117.200/#/dashboard"
                    />
                <WorkItem 
                    size={11} 
                    color={{from: "#3FC8FA", to: "#4040F4"}} 
                    gridArea="rt" 
                    title="TodoList"
                    url="https://antonwy.github.io/todo-list/"
                    />
                <WorkItem 
                    size={13} 
                    color={{from: "#40AFF4", to: "#3FFA87"}} 
                    gridArea="mt0" 
                    title="Portfolio1"
                    url="https://antonwy.github.io/portfolio_website/"
                    />
                <WorkItem 
                    size={12} 
                    color={{from: "#8967E8", to: "#612DB5"}} 
                    gridArea="mm" 
                    title="Portfolio2"
                    url="https://antonwy.github.io/my_portfolio/"
                    />
                <WorkItem 
                    size={16} 
                    color={{from: "#F44040", to: "#713FFA"}} 
                    gridArea="lb" 
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
                    gridArea="mb0" 
                    title="Weather"
                    url=""
                    />
            </Grid>
            
        </Card>
    </Container>
  )
}

export default MyWork
