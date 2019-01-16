import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.png';

class Top extends Component {
  render() {
    return (
      <Root>
        <Img src={logo} alt="logo" />
        <Concept>
          火災という一刻を争う災害に対して、<br />
          正確な情報を迅速に<br />
          伝えることができるプラットフォーム
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
  background-color: #391B4D;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

const Img = styled.img`
  width: 375px;
  margin-bottom: 70px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const Concept = styled.p`
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 3rem;
`