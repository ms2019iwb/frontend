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
          <Nav>
            <TabList />
          </Nav>
          <InputWithIcon
            mbSize="75px"
            icon={faEnvelope}
            id="mail"
            type="mail"
            name="mail"
            value={this.state.data.mail}
            placeholder="メールアドレス"
            onChange={this.handleChange}
          />
          <InputWithIcon
            mbSize="186px"
            icon={faKey}
            id="pass"
            type="password"
            name="pass"
            value={this.state.data.pass}
            placeholder="パスワード"
            onChange={this.handleChange}
          />
          <Button text="ログイン" />
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
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const Nav = styled.div`
  margin-bottom: 160px;
  width: 600px;
`