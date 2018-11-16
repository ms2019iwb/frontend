import React from 'react';
import styled from 'styled-components';

const Mypageedit_button = (props) => {
  return (
    <Root>
      {props.text}
    </Root>
  );
};

Mypageedit_button.defaultProps = {
  text: ''
};

export default Mypageedit_button;

const Root = styled.div`
  display: block;
  box-shadow: #df0000 0px 0px 10px;
  background-color: #ef5a5a;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;

  @media screen and (max-width: 1100px){
    border-radius: 5px;
    width: 130px;
    height: 40px;
    line-height: 40px;
  }
`