import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return(
    <Radiowrap>
      <Radioinput type='radio' name={props.name} value={props.value} id={props.id}></Radioinput>
      <Label for={props.id} borderradius={props.borderradius}>
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
  borderradius: '0px 0px 0px 0px',
  text: ''
};

const Radiowrap = styled.div`
`

const Radioinput = styled.input`
  display: none;

  &:checked + label{
    background-color: #254FAE;
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
  border: 1px solid #254FAE;
  border-radius: ${props => props.borderradius};
  box-shadow: 0px 3px 2px rgba(0,0,0,0.16);
  color: #254FAE;
  font-size: 1.4rem;
  }
`