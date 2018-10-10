import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
          <Logo>
            ロゴマーク
          </Logo>
          <TabList />
          <Inputwrap>
            <Form action="" >
              <Id>
                <FontAwesomeIcon icon={faEnvelope} />
                <Idinput type="input" name="mail" placeholder="ID" value={this.state.data.mail} onChange={this.handleChange}></Idinput>
              </Id>
              <Pass>
                <Passinput type="password" name="pass" placeholder="PASSWORD" value={this.state.data.pass} onChange={this.handleChange}></Passinput>
              </Pass>
              <Log>
                <Logbutton type="submit" value="ログイン"></Logbutton>
              </Log>
            </Form>
          </Inputwrap>
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

const Logo = styled.h1`
  
`

const Inputwrap = styled.div`
  
`
const Form = styled.form`
  
`
const Id = styled.div`
  
`
const Pass = styled.div`
  
`
const Log = styled.div`
  
`
const Idinput = styled.input`
  
`
const Passinput = styled.input`
  
`
const Logbutton = styled.input`
  
`