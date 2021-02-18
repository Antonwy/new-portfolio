import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../ScreenSizes';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  padding: 35px 60px 0 60px;
  border-radius: 8px;
  background-image: url(${(props) => props.image.normal}),
    linear-gradient(
      -45deg,
      ${(props) => props.theme.gradient.from} 0%,
      ${(props) => props.theme.gradient.to} 100%
    );
  background-position: ${(props) =>
    props.center ? 'bottom right' : 'bottom center'};
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
    box-sizing: border-box;
    padding: 25px 30px 0 30px;
    border-radius: 0px;
    background-image: url(${(props) => props.image.mobile}),
      linear-gradient(
        -45deg,
        ${(props) => props.theme.gradient.from} 0%,
        ${(props) => props.theme.gradient.to} 100%
      );
    background-size: 135%;
  }
`;

export const Button = styled(Link)`
  width: 150px;
  text-align: center;
  margin-top: 30px;
  ${'' /* background-color: ${props => props.theme.textDark}; */}
  border: 2px solid ${(props) => props.theme.textDark};
  padding: 10px 0;
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
