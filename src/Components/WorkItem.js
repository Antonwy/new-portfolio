import React from 'react'
import styled from 'styled-components'

import Github from '../Assets/githubIcon.svg'
import Open from '../Assets/openIcon.svg'
import { SMALL } from '../ScreenSizes';

const Bubble = styled.div`
    width: ${props => `${props.size}vw`};
    height: ${props => `${props.size}vw`};
    border-radius: 50%;
    background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    position: relative;
    grid-area: ${props => props.gridArea};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        left: -.5vw;
        top: -.5vw;
        width: ${props => `${props.size + 1}vw`};
        height: ${props => `${props.size + 1}vw`};
        border-radius: 50%;
        background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
        z-index: -1;
        opacity: .2;
    }

     @media (max-width: 1200px) {
        width: 48%;
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

`

const Title = styled.h1`
    color: white;
    font-size: 17px;
    font-weight: bold;

    @media (max-width: 1200px) {
        margin-left: 10px;
        font-size: 1em;
    }

`

const Button = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 23px;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow .5s, transform .5s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
`

const Container = styled.div`
    margin-top: 10px;
    display: flex;

    @media (max-width: 1200px) {
        margin-top: 0;
        margin-left: auto;
        margin-right: 10px;
    }
`

const openLink = (url) => () => {
    window.open(url, '_blank');
}
  

const WorkItem = ({ size, color, gridArea, title, url }) => {
  return (
    <Bubble size={size} color={color} gridArea={gridArea}>
        <Title>{title}</Title>
        <Container>
            <Button color={color}><img width="20" src={Open} onClick={openLink(url)}></img></Button>
            <Button style={{ marginLeft: "10px" }} color={color} icon={Github}><img width="20" src={Github}></img></Button>
        </Container>
    </Bubble>
  )
}

export default WorkItem
