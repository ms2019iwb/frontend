import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import InputWithIcon from '../../components/Form/InputWithIcon';
import SubmitButton from '../../components/Button/SubmitButton';
import axios from 'axios';
import { withRouter } from 'react-router';
import Variable from '../../variables/Variable';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        mail: '',
        pass: '',
        name: ''
      },
      // 登録状態メッセージ
      statusMsg: ''
    };

    // ログイン中はリダイレクト
    if(sessionStorage.getItem("loginUser")) this.props.history.push('/');
  }

  txtChange = event => {
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;
    this.setState({
      data:data
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const user = {
      email_address: this.state.data.mail,
      screen_name: this.state.data.name,
      password: this.state.data.pass,
      password_confirmation: this.state.data.pass
    };

    console.log('【frego-api】HTTPリクエスト開始: POST /users');

    this.setState({
      statusMsg: '登録中'
    });

    axios
      .post(`${Variable.FREGO_API_BASE_ENDPOINT}/users`, { user })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            statusMsg: '登録に成功しました。'
          });
          sessionStorage.setItem('loginUser', JSON.stringify(response.data));
          // リダイレクト
          this.props.history.push('/');
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
        this.setState({
          statusMsg: '登録に失敗しました。'
        });
      });
  };

  render() {
    return (
      <Root>
        <Top />
        <Form onSubmit={this.submitHandler}>
          <Img src="../images/logo.png" alt="logo" />
          <Nav>
            <TabList />
          </Nav>
          <div>{this.state.statusMsg}</div>
          <InputList>
            <InputItem>
              <InputWithIcon
                id="mail"
                type="mail"
                name="mail"
                value={this.state.data.mail}
                placeholder="メールアドレス"
                onChange={this.txtChange}
              />
            </InputItem>
            <InputItem>
              <InputWithIcon
                id="pass"
                type="password"
                name="pass"
                value={this.state.data.pass}
                placeholder="パスワード"
                onChange={this.txtChange}
              />
            </InputItem>
            <InputItem>
              <InputWithIcon
                id="name"
                type="text"
                name="name"
                value={this.state.data.name}
                placeholder="ニックネーム"
                onChange={this.txtChange}
              />
            </InputItem>
          </InputList>
          <Action>
            <SubmitButton val="登録" />
          </Action>
        </Form>
      </Root>
    );
  }
}

export default withRouter(Signup);

const Root = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: #b9b9b9;

    @media screen and (max-width: 1100px) {
      flex-direction: column-reverse;
      height: auto;
    }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

const Img = styled.img`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    width: 167px;
    margin: 22px 0 32px;
  }
`

const Nav = styled.nav`
  margin-bottom: 100px;
  width: 600px;

  @media screen and (max-width: 1100px) {
    width: 284px;
    margin-bottom: 101px;
  }
`

const InputList = styled.ul`
  margin-bottom: 125px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 70px;
  }
`

const InputItem = styled.li`
  height: 25px;

  &:not(:last-child) {
    margin-bottom: 71px;
  }

  @media screen and (max-width: 1100px) {
    &:not(:last-child) {
      margin-bottom: 51px;
    }
  }
`

const Action = styled.div`
  @media screen and (max-width: 1100px) {
    margin-bottom: 37px;
  }
`