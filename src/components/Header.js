import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
  Logout = event => {
    event.preventDefault();
    sessionStorage.removeItem('loginUser');
    // リダイレクト
    this.props.history.push('/login');
  }

  render() {
    return (
      <Root>
        <Logo to="/"><Img src="../images/logo.png" alt="logo" /></Logo>
        <Navi to="/report">発生火災一覧</Navi>
        <Navi to="/report/form">火災報告</Navi>
        <Navi to="/mypage">{JSON.parse(sessionStorage.getItem("loginUser")).screen_name}さん</Navi>
        <button onClick={this.Logout}>ログアウト</button>
      </Root>
    );
  }
}

export default withRouter(Header);

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F58989;
  padding: 0 130px;
  width: 100%;
  height: 80px;
`

const Logo = styled(Link)`
  width: 200px;
`

const Img = styled.img`
  width: 100%;
`

const Navi = styled(Link)`
  font-size: 2rem;
  color: #fff;
`