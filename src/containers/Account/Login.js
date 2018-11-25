import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import InputWithIcon from '../../components/Form/InputWithIcon';
import SubmitButton from '../../components/Button/SubmitButton';
import axios from 'axios';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        mail: '',
        pass: ''
      },
      // 認証状態メッセージ
      statusMsg: ''
    };

    // ログイン中はリダイレクト
    if(sessionStorage.getItem("loginUser")) this.props.history.push('/');
  }

  handleChange = event => {
    const updateData = {...this.state.data};
    updateData[event.target.name] = event.target.value;

    this.setState({
      data: updateData
    });
  };

  SubmitHandler = event => {
    event.preventDefault();

    const user = {
      email_address: this.state.data.mail,
      password: this.state.data.pass
    };

    console.log('【frego-api】HTTPリクエスト開始: POST /login');

    this.setState({
      statusMsg: '認証中'
    });

    axios
      .post('https://frego-api.herokuapp.com/login', { user })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            statusMsg: '認証に成功しました。'
          });
          sessionStorage.setItem("loginUser", JSON.stringify(response.data));
          // リダイレクト
          this.props.history.push('/');
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
        this.setState({
          statusMsg: '認証に失敗しました。'
        });
      });
  }

  render() {
    return (
      <Root>
        <Top />
        <Form onSubmit={this.SubmitHandler}>
          <Img src="../images/logo.png" alt="logo" />
          <Nav>
            <TabList />
          </Nav>
          <div>{this.state.statusMsg}</div>
          <InputList>
            <InputItem>
              <InputWithIcon
                icon={faEnvelope}
                id="mail"
                type="mail"
                name="mail"
                value={this.state.data.mail}
                placeholder="メールアドレス"
                onChange={this.handleChange}
              />
            </InputItem>
            <InputItem>
              <InputWithIcon
                icon={faKey}
                id="pass"
                type="password"
                name="pass"
                value={this.state.data.pass}
                placeholder="パスワード"
                onChange={this.handleChange}
              />
            </InputItem>
          </InputList>
          <Action>
            <SubmitButton val="ログイン" />
          </Action>
        </Form>
      </Root>
    );
  }
}

export default withRouter(Login);

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

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

const Nav = styled.div`
  margin-bottom: 160px;
  width: 600px;

  @media screen and (max-width: 1100px) {
    width: 284px;
    margin-bottom: 142px;
  }
`

const InputList = styled.ul`
  margin-bottom: 186px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 121px;
  }
`

const InputItem = styled.li`
  height: 45px;

  &:first-child {
    margin-bottom: 75px;
  }

  @media screen and (max-width: 1100px) {
    &:first-child {
      margin-bottom: 51px;
    }
  }
`

const Action = styled.div`
  @media screen and (max-width: 1100px) {
    margin-bottom: 36px;
  }
`