import React from 'react';
import styled from 'styled-components';

const Status = (props) => {
  return(
    <Statusshow backgroundcolor={props.backgroundcolor} borderradius={props.borderradius} color={props.color}>
        {props.text}
    </Statusshow>
  );
};

Status.defaultProps = {
  backgroundcolor: '#FFFFFF',
  borderradius: '0px 0px 0px 0px',
  color: '#000000',
  text: ''
};

export default Status;

const Statusshow = styled.div`
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
  border: 1px solid #BFAFAF;
  border-radius: ${props => props.borderradius};
  box-shadow: 0px 3px 2px rgba(0,0,0,0.3);
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  font-size: 1.4rem;
  }
`