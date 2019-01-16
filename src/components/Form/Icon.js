import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => {
  return(
    <Root>
      <FontAwesomeIcon icon={props.icon} />
    </Root>
  );
};

Icon.defaultProps = {
  icon: 'faUser'
};

export default Icon;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid #254FAE;
  border-radius: 100%;
  box-shadow: none;
  background-color: #FFFFFF;

  & > SVG {
    width: 27px !important;
    height: auto !important;
    color: #254FAE;
  }
`