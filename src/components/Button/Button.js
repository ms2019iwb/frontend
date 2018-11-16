import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Root
      to={props.to}
    >
      {props.text}
    </Root>
  );
};

Button.defaultProps = {
  to: '/',
  text: ''
};

export default Button;

const Root = styled(Link)`
  display: block;
  box-shadow: none;
  background-color: #FFFFFF;
  border: 1px solid #EF5A5A;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #EF5A5A;
  font-size: 2rem;
  transition: 0.4s;

  &:hover{
    box-shadow: #df0000 0px 0px 10px;
    background-color: #ef5a5a;
    border: none;
    color: #fff;
    transition: 0.4s;
  }
`