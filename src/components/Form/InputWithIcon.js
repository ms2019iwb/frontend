import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputWithIcon = (props) => {
  return(
    <Root>
      <Label htmlFor={props.id}>
        <FontAwesomeIcon icon={props.icon} />
      </Label>
      <Input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Root>
  );
};

export default InputWithIcon;

InputWithIcon.defaultProps = {
  mbSize: '0',
  id: '',
  icon: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: ''
};

const Root = styled.div`
  display: flex;
  height: 100%;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  background-color: #EF5A5A;
  border-radius: 15px 0 0 15px;
  border-right: solid 1px #707070;
  width: 45px;
  height: 100%;
  font-size: 3rem;
  color: #fff;

  & > svg {
    font-size: 2rem;
  }
`

const Input = styled.input`
  border: none;
  border-radius: 0px 15px 15px 0px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  background-color: #FFADAD;
  padding: 0 14px;
  width: 500px;
  height: 100%;
  font-size: 2rem;
  color: #fff;

  &::-webkit-input-placeholder{
    color: #fff;
  }
`;