import React from 'react';
import styled from 'styled-components';

const Status = (props) => {
  return(
    <StatusShow backgroundColor={props.backgroundColor} borderRadius={props.borderRadius} color={props.color}>
        {props.text}
    </StatusShow>
  );
};

Status.defaultProps = {
  backgroundColor: '#fff',
  borderRadius: '0',
  color: '#000',
  text: ''
};

export default Status;

const StatusShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 80px;
  height: 35px;
  border: 1px solid #BFAFAF;
  border-radius: ${props => props.borderRadius};
  box-shadow: 0px 3px 2px rgba(0,0,0,0.3);
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: 1.4rem;
`