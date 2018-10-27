import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import InputWithIcon from '../../components/Form/InputWithIcon';
import Button from '../../components/Button/Button';

class Signup extends Component {
  state = {
    data: {
      mail: '',
      pass: '',
      name: ''
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
                onChange={this.txtChange}
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
                onChange={this.txtChange}
              />
            </InputItem>
            <InputItem>
              <InputWithIcon
                icon={faUser}
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
            <Button text="登録" />
          </Action>
        </Form>
      </Root>
    );
  }
}

export default Signup;

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
  }
`

const InputList = styled.ul`
  margin-bottom: 125px;
`

const InputItem = styled.li`
  height: 45px;

  &:not(:last-child) {
    margin-bottom: 75px;
  }
`

const Action = styled.div`
  @media screen and (max-width: 1100px) {
    margin-bottom: 36px;
  }
`