import React, { Component } from 'react';
import styled from 'styled-components';

class Top extends Component {
  render() {
    return (
      <Root>
        <Logo>
          FREGO<br />
          LOGO
        </Logo>
        <Concept>
          テキストテキストテキストテキスト<br />
          テキストテキストテキストテキスト<br />
          テキストテキストテキストテキスト
        </Concept>
      </Root>
    );
  }
}

export default Top;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background-color: #f58989;
`

const Logo = styled.p`
  width: 389px;
  height: 84px;
  margin-bottom: 215px;
  color: #ff8080;
  background-color: #fff;
`

const Concept = styled.p`
  color: #fff;
  text-align: center;
  line-height: 56px;
`