import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from '../../../components/Button/Tab';

class TabList extends Component {
  render() {
    return (
      <Root>
        <Tab color='#707070' activeColor='#e95252' borderPx='1px' activeBorderPx='3px' to='/login' text='ログイン' />
        <Tab color='#707070' activeColor='#e95252' borderPx='1px' activeBorderPx='3px' to='/signup' text='新規登録' />
      </Root>
    );
  }
}

export default TabList;

const Root = styled.div`
  display: flex;
  width: 100%;
`