import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return(
    <Root
      width={props.width} 
      height={props.height} 
      border={props.border} 
      borderradius={props.borderradius} 
      boxshadow={props.boxshadow}
      backgroundcolor={props.backgroundcolor} 
      color={props.color} 
      fontsize={props.fontsize}
    >
      {props.text}
    </Root>
  );
};

Button.defaultProps = {
  width: '80px',
  height: '30px',
  border: '1px solid #FFFFFF',
  borderradius: '0px 0px 0px 0px',
  boxshadow: 'none',
  backgroundcolor: '#FFFFFF',
  color: '#000000',
  fontsize: '1.4rem',
  text: ''
};

export default Button;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  border-radius: ${props => props.borderradius};
  box-shadow: ${props => props.boxshadow};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  font-size: ${props => props.fontsize};
  }
`