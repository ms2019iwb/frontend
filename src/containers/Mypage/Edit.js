import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithIcon from '../../components/Form/InputWithIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Mypageedit_button';


class Edit extends Component {

  state = {
    data: {
      name: '',
      pass: ''
    }
  };

  txtChange = event => {
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;
    this.setState({
      data:data
    });
    console.log(data);
  };

  render() {
    return (
      <Root>
        <Header>Header</Header>
        <Left>
          <Backtop>
            <Userimg>
              <FontAwesomeIcon icon={faUser} />
            </Userimg>
            <Username>名前が入ります</Username>
          </Backtop>
        </Left>
        <Right>
          <Accounteditwrap>
            <Accountedittitle>
              アカウント情報変更
            </Accountedittitle>
            <Accountedittext>
              <Accounteditname>
                <InputWithIcon
                  mbSize="0px"
                  icon={faUser}
                  id="name"
                  type="text"
                  name="name"
                  value={this.state.data.name}
                  placeholder="ニックネーム"
                  onChange={this.txtChange}
                />
              </Accounteditname>
              <Accounteditpass>
                <InputWithIcon
                  mbSize="0px"
                  icon={faKey}
                  id="pass"
                  type="password"
                  name="pass"
                  value={this.state.data.pass}
                  placeholder="パスワード"
                  onChange={this.txtChange}
                />
              </Accounteditpass>
            </Accountedittext>
            <Accounteditsubmit>
              <Button text="更新" />
            </Accounteditsubmit>
          </Accounteditwrap>
        </Right>
      </Root>
    );
  }
}

export default Edit;

const Root = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  color: #333;

  @media screen and (max-width: 1100px){
    flex-direction: column;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #707070;
  background-color: #FFFFFF;
  color: #060606;
  font-size: 3rem;
`
const Left = styled.div`
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  border-right: 1px solid #707070;

  @media screen and (max-width: 1100px){
    width: 100%;
    height: 32%;
    border-right: none;
  }
`

const Backtop = styled.div`
  position: relative;
  width: 100%;
  height: 44%;
  background-color: #F58989;

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

  @media screen and (max-width: 1100px){
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

  @media screen and (max-width: 1100px){
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

  @media screen and (max-width: 1100px){
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

  @media screen and (max-width: 1100px){
    width: 100%;
    justify-content: unset; 
  }
`

const Accounteditwrap = styled.div`
  text-align: center;

  @media screen and (max-width: 1100px){
    margin-top: 148px;
  }
`

const Accountedittitle = styled.h1`
  margin-bottom: 97px;
  color: #707070;
  font-size: 2.4rem;

  @media screen and (max-width: 1100px){
    margin-bottom: 27px;
  }
`

const Accountedittext = styled.div`
  margin-bottom: 125px;

  @media screen and (max-width: 1100px){
    margin-bottom: 44px;
  }
`

const Accounteditname = styled.div`
  margin-bottom: 75px;

  @media screen and (max-width: 1100px){
    margin-bottom: 29px;
  }
`

const Accounteditpass = styled.div`
`

const Accounteditsubmit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`