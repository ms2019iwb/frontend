import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = (props) => {
  return (
    <Tabutton color={props.color} activecolor={props.activeColor} to={props.to}>
      {props.text}
    </Tabutton>
  );
};

Tab.defaultProps = {
  color: '#707070',
  activecolor: '#e95252',
  to: '/',
  text: ''
};

export default Tab;

const Tabutton = styled(NavLink)`
  display: block;
  border-bottom: solid 1px ${props => props.color};
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 2.4rem;
  color: ${props => props.color};

  &.active {
    border-bottom: solid 3px ${props => props.activecolor};
    color: ${props => props.activecolor};
  }

  @media screen and (max-width: 1100px) {
    height: 24px;
    line-height: 24px;
    font-size: 1rem;
  }
`