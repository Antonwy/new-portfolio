import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SMALL } from '../ScreenSizes';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    width: 80%;
    height: 80%;
    background-color: white;
    padding: 35px 60px 0 60px;
    border-radius: 8px;
    background-image: url(${props => props.image}), linear-gradient(-45deg, #434343 0%, #252525 100%);
    background-position: ${props => props.center ? "bottom right" : "bottom center"};
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;

    @media (max-width: ${SMALL}px) {
        width: 100%;
        height: 100%;
        padding: 35px 20px 0 20px;
        border-radius: 0px;
        background-image: url(${props => props.image}), linear-gradient(-45deg, #434343 0%, #252525 100%);
        background-position: ${props => props.center ? "bottom right" : "bottom center"};
        background-repeat: no-repeat;
        overflow: hidden;
        background-size: 100%;
    }

`

export const Button = styled(Link)`
    width: 150px;
    text-align: center;
    margin-top: 30px;
    background-color: #786EBC;
    padding: 10px 0;
    border-radius: 5px;
    color: #D0C9FF;
    cursor: pointer;
    transition: opacity .25s;
    text-decoration: none;

    &:hover {
        opacity: .75;
    }
`