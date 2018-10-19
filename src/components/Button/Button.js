import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Root
      widthSize={props.widthSize}
      heightSize={props.heightSize}
      color={props.color}
      shadowColor={props.shadowColor}
      to={props.to}
    >
      {props.text}
    </Root>
  );
};

Button.defaultProps = {
  widthSize: '150px',
  heightSize: '50px',
  color: '#ef5a5a',
  shadowColor: '#df0000',
  to: '/',
  text: ''
};

export default Button;

const Root = styled(Link)`
  display: block;
  box-shadow: ${props => props.shadowColor} 0px 0px 10px;
  background-color: ${props => props.color};
  border-radius: 10px;
  width: ${props => props.widthSize};
  height: ${props => props.heightSize};
  line-height: ${props => props.heightSize}
  text-align: center;
  color: #fff;
  font-size: 2rem;
`