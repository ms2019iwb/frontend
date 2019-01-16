import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return(
    <Radiowrap>
      <Radioinput type='radio' name={props.name} value={props.value} id={props.id}></Radioinput>
      <Label htmlFor={props.id} borderRadius={props.borderRadius} onClick={props.onClick}>
        {props.text}
      </Label>
    </Radiowrap>
  );
};

export default Input;

Input.defaultProps = {
  name: '',
  value: '',
  id: '',
  borderRadius: '0',
  text: ''
};

const Radiowrap = styled.div`
`

const Radioinput = styled.input`
  display: none;

  &:checked + label{
    background-color: #FF000F;
    color: #FFFFFF;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 80px;
  height: 35px;
  border: 1px solid #FF000F;
  border-radius: ${props => props.borderRadius};
  box-shadow: 0px 3px 2px rgba(0,0,0,0.16);
  color: #FF000F;
  font-size: 1.4rem;
`