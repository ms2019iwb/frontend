import React from 'react';
import styled from 'styled-components';

const InputWithIcon = (props) => {
  return(
    <Root>
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

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #808080;
  padding: 0 0 5px 5px;
  width: 517px;
  height: 100%;
  font-size: 1.4rem;
  color: #808080;

  &:focus{
    border-bottom: 2px solid #CD87FC;
  }

  &::-webkit-input-placeholder{
    color: #808080;
  }

  &:-webkit-autofill{
    box-shadow: 0 0 0px 999px #fff inset;
  }

  @media screen and (max-width: 1100px){
    border: none;
    border-bottom: 1px solid #808080;
    width: 220px;
    font-size: 1.4rem;
  }
`