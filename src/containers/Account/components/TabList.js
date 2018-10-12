import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from '../../../components/Button/Tab';

class TabList extends Component {
  render() {
    return (
      <List>
        <Item>
          <Tab color='#707070' activeColor='#e95252' to='/login' text='ログイン' />
        </Item>
        <Item>
          <Tab color='#707070' activeColor='#e95252' to='/signup' text='新規登録' />
        </Item>
      </List>
    );
  }
}

export default TabList;

const List = styled.ul`
  display: flex;
  width: 100%;
`

const Item = styled.li`
  width: 50%;
`