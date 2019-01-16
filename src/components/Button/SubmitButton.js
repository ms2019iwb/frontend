import React from 'react';
import styled from 'styled-components';

const SubmitButton = (props) => {
  return (
    <Root
      type="submit"
      value={props.val}
    />
  );
};

SubmitButton.defaultProps = {
  val: '送信'
};

export default SubmitButton;

const Root = styled.input`
  display: block;
  box-shadow: none;
  background-color: #FFFFFF;
  border: 1px solid #A552DD;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #A552DD;
  font-size: 2rem;
  transition: 0.4s;

  &:hover{
    box-shadow: #A552DD 0px 0px 10px;
    background-color: #A552DD;
    border: none;
    color: #fff;
    transition: 0.4s;
  }
`