import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_name: '',
      subNavDisplayStatus: false,
      // モバイルナビゲーション表示状態
      mobileNavDisplayStatus: false
    };
  }

  componentDidMount() {
    this.setState({
      screen_name: JSON.parse(sessionStorage.getItem('loginUser')).screen_name
    });
  }

  Logout = event => {
    event.preventDefault();
    sessionStorage.removeItem('loginUser');
    // リダイレクト
    this.props.history.push('/login');
  }

  // サブナビゲーション表示切り替え
  toggleSubNav = event => {
    event.preventDefault();
    let status = false;
    this.state.subNavDisplayStatus ? status = false : status = true;
    this.setState({
      subNavDisplayStatus: status
    });
  }

  // モバイルナビゲーション表示切り替え
  toggleMobileNav = event => {
    event.preventDefault();
    let status = false;
    this.state.mobileNavDisplayStatus ? status = false : status = true;
    this.setState({
      mobileNavDisplayStatus: status
    });
  }

  render() {
    return (
      <Root>
        <PC>
          <Logo to="/"><Img src={logo} alt="logo" /></Logo>
          <Nav exact to="/report">発生火災一覧</Nav>
          <Nav exact to="/report/check">火災報告</Nav>
          <UserArea>
            <User onClick={this.toggleSubNav} subNavDisplayStatus={this.state.subNavDisplayStatus}>
              <UserName>{this.state.screen_name}さん</UserName>
              <Icon icon={faCaretDown} />
            </User>
            <SubNavList subNavDisplayStatus={this.state.subNavDisplayStatus}>
              <SubNavItem>
                <SubNav to="/mypage">マイページ</SubNav>
              </SubNavItem>
              <SubNavItem>
                <SubNavText onClick={this.Logout}>ログアウト</SubNavText>
              </SubNavItem>
            </SubNavList>
          </UserArea>
        </PC>
        <Mobile>
          <Logo to="/"><Img src={logo} alt="logo" /></Logo>
          <UserName>{this.state.screen_name}さん</UserName>
          <MobileNavTrigger onClick={this.toggleMobileNav} mobileNavDisplayStatus={this.state.mobileNavDisplayStatus} />
          <MobileNavList mobileNavDisplayStatus={this.state.mobileNavDisplayStatus}>
            <MobileNavItem>
              <MobileNav to="/report">発生火災一覧</MobileNav>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNav to="/report/check">火災報告</MobileNav>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNav to="/mypage">マイページ</MobileNav>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavText onClick={this.Logout}>ログアウト</MobileNavText>
            </MobileNavItem>
          </MobileNavList>
        </Mobile>
      </Root>
    );
  }
}

export default withRouter(Header);

const Root = styled.nav`
  border-bottom: 1px solid #ffffff;
  background-color: #391B4D;
  width: 100%;
  height: 80px;
  z-index: 99;

  @media screen and (max-width: 1100px) {
    height: 60px;
  }
`

const PC = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const Mobile = styled.div`
  position: relative;
  justify-content: flex-end;
  align-items: center;
  display: none;
  padding: 0 30px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    display: flex;
  }
`

const Logo = styled(Link)`
  margin-right: auto;
  width: 151px;

  @media screen and (max-width: 1100px) {
    width: 113px;
  }
`

const Img = styled.img`
  width: 100%;
`

const Nav = styled(NavLink)`
  margin-right: 75px;
  height: 100%;
  line-height: 80px;
  font-size: 2rem;
  color: #fff;

  &:hover {
    border-bottom: solid 3px #FF000F;
  }

  &.active {
    border-bottom: solid 3px #FF000F;
  }
`

const UserArea = styled.div`
  position: relative;
  width: 160px;
  height: 100%;
`

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.subNavDisplayStatus ? 'rgba(57, 27, 77, 0.25)' : '#391B4D'};
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const UserName = styled.div`
  margin-right: 5px;
  font-size: 2rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    margin-right: 10px;
    font-size: 1.4rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
`

const SubNavList = styled.ul`
  display: ${props => props.subNavDisplayStatus ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #391B4D;
  width: 160px;
`

const SubNavItem = styled.li`
  width: 100%;
  height: 39px;
`

const SubNav = styled(Link)`
  display: block;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  line-height: 39px;
  font-size: 1.8rem;
  color: #fff;
`

const SubNavText = styled.p`
  padding: 0 10px;
  width: 100%;
  height: 100%;
  line-height: 39px;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
`

const MobileNavTrigger = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &::before, &::after {
    position: absolute;
    left: 7px;
    content: '';
    background-color: #391B4D;
    width: 10px;
    height: 1px;
    transition: all 0.2s linear;
  }

  &::before {
    top: 9px;

    ${props => props.mobileNavDisplayStatus && `
      top: 13px;
      transform: rotate(45deg);
    `};
  }

  &::after {
    top: 16px;

    ${props => props.mobileNavDisplayStatus && `
      top: 13px;
      transform: rotate(-45deg);
    `};
  }
`

const MobileNavList = styled.ul`
  display: ${props => props.mobileNavDisplayStatus ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #391B4D;
  width: 100%;
`

const MobileNavItem = styled.li`
  width: 100%;
  height: 40px;
`

const MobileNav = styled(Link)`
  display: block;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: right;
  font-size: 1.4rem;
  color: #fff;

  &:click {
    background-color: rgba(57, 27, 77, 0.25);
  }
`

const MobileNavText = styled.p`
  padding: 0 30px;
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: right;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;

  &:click {
    background-color: rgba(57, 27, 77, 0.25);
  }
`