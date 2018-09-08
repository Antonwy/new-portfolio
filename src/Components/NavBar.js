import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hamburger from '../Assets/hamburger_dark.svg';
import Close from '../Assets/close_dark.svg'
import { SMALL } from '../ScreenSizes';

const Logo = styled.h1`
    color: white;
    font-size: 1.5em;
    position: relative;
    font-weight: bold;
    padding-bottom: 5px;
    float: left;

    &:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 35px;
        width: 60px;
        height: 3px;
        border-radius: 20px;
        background-color: #786EBC;
    }
`

const List = styled.ul`
    list-style: none;
    transition: opacity 500ms;

    @media (max-width: ${SMALL}px) {
        position: absolute; 
        background-color: black;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        visibility: ${props => props.hidden ? "visible" : "hidden"};
        ${'' /*     opacity: ${props => props.hidden ? "0" : "1"}; */}
    }
`

const ListItem = styled.li`
    float: right;
    color: white;
    cursor: pointer;
    margin-left: 40px;
    transition: border-bottom 250ms;
    text-decoration: none;
    border-bottom: ${props => props.index ? "3px #786EBC solid" : "border-bottom: 3px transparent solid"};

    @media (max-width: ${SMALL}px) {
        float: none;
        margin: auto;
        text-align: center;
        margin: 20px 0;
    }

    &:hover {
        border-bottom: 3px #786EBC solid;
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
`

const CloseBtn = styled.div`
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url(${Close});
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
    display: ${props => props.hidden ? "block" : "none"}
`

const Menu = styled.div`
    width: 30px;
    height: 20px;
    margin-top: 10px;
    background-image: url(${Hamburger});
    background-repeat: no-repeat;
    float: right;
    cursor: pointer;

    @media (min-width: ${SMALL}px){
        display: none;
    }

`


export default class NavBar extends Component {

    state = {
        showMenu: false
    }

    toggleMenu = (index) => () => {
        if(this.props.index == index && index) return;
        this.setState(state => ({
            showMenu: !state.showMenu
        }));
    }

  render() {
      const { index } = this.props;
      const { showMenu } = this.state;
    return (
      <div>
        <Logo>ANTONWY</Logo>
        <List hidden={showMenu}>
            <CloseBtn onClick={this.toggleMenu()} hidden={showMenu} />
            <StyleLink to="/contact" onClick={this.toggleMenu(3)}><ListItem index={index == 3 ? true : false}>Contact</ListItem></StyleLink>
            <StyleLink to="/myWork" onClick={this.toggleMenu(2)}><ListItem index={index == 2 ? true : false}>My work</ListItem></StyleLink>
            <StyleLink to="/aboutMe" onClick={this.toggleMenu(1)}><ListItem index={index == 1 ? true : false}>About me</ListItem></StyleLink>
            <StyleLink to="/" onClick={this.toggleMenu(0)}><ListItem index={index == 0 ? true : false}>Home</ListItem></StyleLink>
        </List>
        <Menu onClick={this.toggleMenu()}/>
      </div>
    )
  }
}
