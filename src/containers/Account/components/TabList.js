import React from 'react';
import styled from 'styled-components';
import Tab from '../../../components/Button/Tab';

const TabList = () => {
  return (
    <List>
      <Item>
        <Tab color='#ADADAD' activeColor='#e95252' to='/login' text='ログイン' />
      </Item>
      <Item>
        <Tab color='#ADADAD' activeColor='#e95252' to='/signup' text='新規登録' />
      </Item>
    </List>
  );
};

export default TabList;

const List = styled.ul`
  display: flex;
  width: 100%;
`

const Item = styled.li`
  width: 50%;
`