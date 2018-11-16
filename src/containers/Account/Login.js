import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import InputWithIcon from '../../components/Form/InputWithIcon';
import Button from '../../components/Button/Button';

class Login extends Component {
  state = {
    data: {
      mail: '',
      pass: ''
    }
  };

  handleChange = event => {
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;

    this.setState({
      data: data
    });

    console.log(data);
  };

  render() {
    return (
      <Root>
        <Top />
        <Form>
          <Img src="../images/logo.png" alt="logo" />
          <Nav>
            <TabList />
          </Nav>
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
            <Button text="ログイン" />
          </Action>
        </Form>
      </Root>
    );
  }
}

export default Login;

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