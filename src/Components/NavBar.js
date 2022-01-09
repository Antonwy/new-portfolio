import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../ScreenSizes';

const Logo = styled.h1`
  font-size: 1.5em;
  position: relative;
  padding-bottom: 5px;
  float: left;
  color: ${(props) => props.theme.textNormal};
  cursor: pointer;
  transition: color 250ms;
  transition-delay: 250ms;

  &:before {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: calc(50% - 30px);
    width: 60px;
    height: 3px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.textDark};
    transition: width 250ms, left 250ms;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 120%;
    height: 0%;
    background: ${(props) => props.theme.textDark};
    box-shadow: 0 0 20px -2px ${(props) => props.theme.textDark};
    transition: height 250ms, border-radius 250ms;
    transition-delay: 250ms;
    z-index: -2;
  }

  &:hover:before {
    width: 100%;
    left: 0;
  }

  &:hover:after {
    height: 120%;
    border-radius: 5px;
  }

  &:hover {
    color: white;
  }
`;

const List = styled.ul`
  list-style: none;
  transition: opacity 500ms;
  visibility: visible;
  opacity: 1;
  color: ${(props) => props.theme.textNormal};

  @media (min-width: ${SMALL}px) {
    visibility: visible;
    opacity: 1;
    background: red;
  }

  @media (max-width: ${SMALL}px) {
    position: fixed;
    background-image: linear-gradient(
      -45deg,
      ${(props) => props.theme.gradient.from} 0%,
      ${(props) => props.theme.gradient.to} 100%
    );
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
    visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
    opacity: ${(props) => (props.hidden ? '0' : '1')};
  }
`;

const ListItem = styled.li`
  float: right;
  cursor: pointer;
  margin-left: 40px;
  text-decoration: none;
  position: relative;
  transition: transform 500ms;

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    margin-top: 10px;
    width: ${(props) => (props.index ? '100%' : '0%')};
    height: 3px;
    background-color: ${(props) => props.theme.textDark};
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
    transform: scale(0.95);
    &:before {
      width: 100%;
    }
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CloseBtn = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.theme.images.navBar.close});
  margin-top: 35px;
  margin-right: 35px;
  cursor: pointer;

  @media (min-width: ${SMALL}px) {
    visibility: hidden;
  }

  @media (max-width: ${SMALL}px) {
    visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  }
`;

const Menu = styled.div`
  width: 30px;
  height: 20px;
  margin-top: 10px;
  background-image: url(${(props) => props.theme.images.navBar.hamburger});
  background-repeat: no-repeat;
  float: right;
  cursor: pointer;

  @media (min-width: ${SMALL}px) {
    display: none;
  }
`;

const NavBarContainer = styled.div`
  padding: 50px 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 160px);
  z-index: 200;

  @media (max-width: ${SMALL}px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;

const useWindowSizeToHide = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > SMALL && hide) {
        setHide(false);
      } else if (window.innerWidth < SMALL && !hide) {
        setHide(true);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return hide;
};

const NavBar = ({ index, theme }) => {
  const hideMenuCauseOfSize = useWindowSizeToHide();
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = (index, visible) => () => {
    if ((index == index && index) || window.innerWidth > SMALL) return;

    console.log(hideMenu);

    setHideMenu(!hideMenu);
  };

  return (
    <NavBarContainer>
      <Logo>ANTONWY</Logo>
      <List hidden={hideMenu && hideMenuCauseOfSize}>
        <CloseBtn
          onClick={toggleMenu()}
          hidden={hideMenu && hideMenuCauseOfSize}
        />
        <StyleLink to="/contact">
          <ListItem
            index={index == '/contact' ? true : false}
            onClick={toggleMenu(3, false)}
          >
            Contact
          </ListItem>
        </StyleLink>
        <StyleLink to="/myWork">
          <ListItem
            index={index == '/myWork' ? true : false}
            onClick={toggleMenu(2, false)}
          >
            My work
          </ListItem>
        </StyleLink>
        <StyleLink to="/aboutMe">
          <ListItem
            index={index == '/aboutMe' ? true : false}
            onClick={toggleMenu(1, false)}
          >
            About me
          </ListItem>
        </StyleLink>
        <StyleLink to="/">
          <ListItem
            index={index == '/' ? true : false}
            onClick={toggleMenu(0, false)}
          >
            Home
          </ListItem>
        </StyleLink>
      </List>
      <Menu onClick={toggleMenu()} />
    </NavBarContainer>
  );
};

export default NavBar;
