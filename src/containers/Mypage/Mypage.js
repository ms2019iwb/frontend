import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressCard } from '@fortawesome/free-solid-svg-icons';

class Mypage extends Component {
  render() {
    return (
      <Root>
        <Header />
        <Main>
          <Left>
            <Backtop>
              <Userimg>
                <FontAwesomeIcon icon={faUser} />
              </Userimg>
              <Username>名前が入ります</Username>
            </Backtop>
          </Left>
          <Right>
            <Itemwrap>
              <Item>
                <Itemimg>
                  <FontAwesomeIcon icon={faAddressCard} />
                </Itemimg>
                <Itemtxt>
                  アカウント情報変更
                </Itemtxt>
              </Item>
            </Itemwrap>
          </Right>
        </Main>
      </Root>
    );
  }
}

export default Mypage;

const Root = styled.div`
  width: 100%;
  color: #333;
`

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`

const Left = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  border-right: 1px solid #707070;

  @media screen and (max-width: 1000px){
    width: 100%;
    height: 32%;
    border-right: none;
  }
`

const Backtop = styled.div`
  position: relative;
  width: 100%;
  height: 44%;
  background-color: #391B4D;

  &::before{
    content: '';
    position: absolute;
    bottom: -66px;
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    width: 133px;
    height: 133px;
    border-radius: 50%;
    background-color: #FFFFFF;
  }

  @media screen and (max-width: 1000px){
    width: 100%;
    height: 100%;

    &::before{
      bottom: -31px;
      width: 63px;
      height: 63px;
    }
  }
`

const Userimg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > svg{
    position: absolute;
    bottom: -165px;
    left: 50%;
    -webkit-box-transform: translate(-50%);
    -moz-box-transform: translate(-50%);
    -ms-box-transform: translate(-50%);
    -o-box-transform: translate(-50%);
    transform: translate(-50%);
    width: 192px !important;
    height: auto !important;
    color: #000000;
  }

  @media screen and (max-width: 1000px){
    & > svg{
      bottom: -80px;
      width: 95px !important;
      height: auto !important;
    }
  }
`

const Username = styled.div`
  position: relative;
  bottom: -265px;
  left: 50%;
  -webkit-box-transform: translate(-50%);
  -moz-box-transform: translate(-50%);
  -ms-box-transform: translate(-50%);
  -o-box-transform: translate(-50%);
  transform: translate(-50%);
  font-size: 2.4rem;
  text-align: center;

  @media screen and (max-width: 1000px){
    bottom: -104px;
    color: #707070;
    font-size: 2rem;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1000px){
    width: 100%;
    align-items: unset;
    justify-content: unset; 
  }
`

const Itemwrap = styled.div`
  @media screen and (max-width: 1000px){
    margin-top: 201px;
  }
`

const Item = styled.div`
  text-align: center;
`

const Itemimg = styled.div`

  & > svg{
    width: 220px !important;
    height: auto !important;
    color: #000000;
  }

  @media screen and (max-width: 1000px){
    & > svg{
      width: 93px !important;
      height: auto !important;
      margin-bottom: 20px;
    }
  }
`

const Itemtxt = styled.p`
  font-size: 1.8rem;
  text-align: center;

  @media screen and (max-width: 1000px){
    font-size: 1.7rem;
  }
`