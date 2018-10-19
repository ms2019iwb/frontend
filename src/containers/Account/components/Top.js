import React, { Component } from 'react';
import styled from 'styled-components';

class Top extends Component {
  render() {
    return (
      <Root>
        <Img src="../images/logo.png" alt="logo" />
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

const Img = styled.img`
  width: 392px;
  margin-bottom: 215px;
`

const Concept = styled.p`
  color: #fff;
  text-align: center;
  line-height: 56px;
  font-size: 2.4rem;
`