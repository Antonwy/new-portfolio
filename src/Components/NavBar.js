import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Link } from 'react-router-dom'
import Hamburger from '../Assets/Dark/hamburger_dark.svg';
import Close from '../Assets/Dark/close_dark.svg'
import { SMALL } from '../ScreenSizes';

const Logo = styled.h1`
    font-size: 1.5em;
    position: relative;
    font-weight: bold;
    padding-bottom: 5px;
    float: left;
    color: ${props => props.theme.textNormal};

    &:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 35px;
        width: 60px;
        height: 3px;
        border-radius: 20px;
        background-color: ${props => props.theme.textDark};;
    }
`

const List = styled.ul`
    list-style: none;
    transition: opacity 500ms;
    visibility: visible;
    opacity: 1;
    color: ${props => props.theme.textNormal};

    @media (min-width: ${SMALL}px) {
        visibility: visible;
        opacity: 1;
        background: red;
    }

    @media (max-width: ${SMALL}px) {
        position: absolute; 
        background-image: linear-gradient(-45deg, ${props => props.theme.gradient.from} 0%, ${props => props.theme.gradient.to} 100%);
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
        visibility: ${props => props.hidden ? "hidden" : "visible"};
        opacity: ${props => props.hidden ? "0" : "1"};
    }
`

const ListItem = styled.li`
    float: right;
    cursor: pointer;
    margin-left: 40px;
    text-decoration: none;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        margin-top: 10px;
        width: ${props => props.index ? "100%" : "0%"};
        height: 3px;
        background-color: ${props => props.theme.textDark};
        transition: width 500ms;
    }

    @media (max-width: ${SMALL}px) {
        float: none;
        margin: auto;
        text-align: center;
        margin: 20px 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }

    &:hover {
      &:before {
          width: 100%;
      }  
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const CloseBtn = styled.div`
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url(${props => props.theme.images.navBar.close});
    margin-top: 35px;
    margin-right: 35px;
    cursor: pointer;

    @media (min-width: ${SMALL}px) {
        visibility: hidden;
    }

    @media (max-width: ${SMALL}px) {
        visibility: ${props => props.hidden ? "hidden" : "visible"};
    }
`

const Menu = styled.div`
    width: 30px;
    height: 20px;
    margin-top: 10px;
    background-image: url(${props => props.theme.images.navBar.hamburger});
    background-repeat: no-repeat;
    float: right;
    cursor: pointer;

    @media (min-width: ${SMALL}px){
        display: none;
    }

`


export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = { hideMenu: window.innerWidth > SMALL ? false : true };
    }
   

    toggleMenu = (index, visible) => () => {
        if(this.props.index == index && index || window.innerWidth > SMALL) return;
        this.setState(state => ({
            hideMenu: !state.hideMenu
        }));
    }

    updateScreenSize = () => {
        if(window.innerWidth > SMALL && this.state.hideMenu){
            this.setState({
                hideMenu: false
            })
        }else if(window.innerWidth < SMALL && !this.state.hideMenu){
            this.setState({
                hideMenu: true
            })
        }
    } 

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateScreenSize);
    }

  render() {
      const { index, theme } = this.props;
      const { hideMenu } = this.state;
    return (
      <div>
        <Logo>ANTONWY</Logo>
        <List hidden={hideMenu}>
            <CloseBtn onClick={this.toggleMenu()} hidden={hideMenu} />
            <StyleLink to="/contact" ><ListItem index={index == 3 ? true : false} onClick={this.toggleMenu(3, false)}>Contact</ListItem></StyleLink>
            <StyleLink to="/myWork" ><ListItem index={index == 2 ? true : false} onClick={this.toggleMenu(2, false)}>My work</ListItem></StyleLink>
            <StyleLink to="/aboutMe" ><ListItem index={index == 1 ? true : false} onClick={this.toggleMenu(1, false)}>About me</ListItem></StyleLink>
            <StyleLink to="/" ><ListItem index={index == 0 ? true : false} onClick={this.toggleMenu(0, false)}>Home</ListItem></StyleLink>
        </List>
        <Menu onClick={this.toggleMenu()}/>
      </div>
    )
  }
}
