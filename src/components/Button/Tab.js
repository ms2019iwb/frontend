import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = (props) => {
  return (
    
      <Tabutton color={props.color} activecolor={props.activeColor} to={props.to}>
        <Bottomline>{props.text}</Bottomline>
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
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 2.4rem;
  color: ${props => props.color};

  &.active {
    box-sizing: border-box;
    border-bottom: solid 3px ${props => props.activecolor};
    color: ${props => props.activecolor};
  }

  @media screen and (max-width: 1100px) {
    height: 24px;
    line-height: 24px;
    font-size: 1rem;
  }
`

const Bottomline = styled.div`
  position: relative;
  font-size: 2.4rem;

  &::after{
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    height: 1px;
    width: 100%;
    border-bottom: 1px solid ${props => props.color};
    box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
  }

@media screen and (max-width: 1100px) {
  font-size: 1rem;
}
`