import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

class Top extends Component {
  render() {
    return (
      <Root>
        <Header />
        ダッシュボード
      </Root>
    );
  }
}

export default Top;

const Root = styled.div``