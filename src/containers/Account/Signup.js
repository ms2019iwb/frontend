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
            onChange={this.txtChange}
          />
          <InputWithIcon
            mbSize="75px"
            icon={faKey}
            id="pass"
            type="password"
            name="pass"
            value={this.state.data.pass}
            placeholder="パスワード"
            onChange={this.txtChange}
          />
          <InputWithIcon
            mbSize="125px"
            icon={faUser}
            id="name"
            type="text"
            name="name"
            value={this.state.data.name}
            placeholder="ニックネーム"
            onChange={this.txtChange}
          />
          <Button text="登録" />
        </Form>
      </Root>
    );
  }
}

export default Signup;

const Root = styled.div`
    display: flex;
    margin: 0;
    width:100%;
    height: 100vh;
    text-align: center;
    color: #b9b9b9;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:50%;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  width: 60rem;
  font-size:2.4rem;
  margin-bottom:100px;
`