import React from 'react';
import styled from 'styled-components';

const Commentframe = (props) => {
  return(
    <Root>
      {props.text}
    </Root>
  );
};

Commentframe.defaultProps = {
  text: ''
};

export default Commentframe;

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 400px;
  height: 99px;
  padding: 7px 10px;
  border: 1px solid #F58989;
  border-radius: 10px;
  background-color: #FFFFFF;
  color: #F58989;
  font-size: 1.4rem;

  &::before{
	  content: "";
	  position: absolute;
    top: 27px;
	  left: -15px;
 	  margin-top: -16px;
    border-top: 8px solid transparent;
    border-right: 16px solid #FFFFFF;
    border-bottom: 8px solid transparent;
 	  z-index: 2;
  }
  
  &::after{
	  content: "";
	  position: absolute;
    top: 27px;
	  left: -17px;
 	  margin-top: -17px;
    border-top: 9px solid transparent;
    border-right: 17px solid #F58989;
    border-bottom: 9px solid transparent;
 	  z-index: 1;
  }
  
  @media screen and (max-width: 1000px) {
    width: 242px;
    height: 100px;

    &::before{
      top: 21px;
	    left: -9px;
 	    margin-top: -10px;
      border-top: 8px solid transparent;
      border-right: 10px solid #FFFFFF;
      border-bottom: 8px solid transparent;
    }

    &::after{
      top: 21px;
	    left: -11px;
 	    margin-top: -11px;
      border-top: 9px solid transparent;
      border-right: 11px solid #F58989;
      border-bottom: 9px solid transparent;
    }
  }
`