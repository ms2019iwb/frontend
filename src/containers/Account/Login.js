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
          <TabList />
          <Inputwrap>
            <Form action="" >
              <Id>
                <Label for="mail">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Label>
                <Idinput type="input" id="mail" name="mail" placeholder="ID" value={this.state.data.mail} onChange={this.handleChange}></Idinput>
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
const Inputwrap = styled.div`
  margin-top: 295px;
`
const Form = styled.form`
  margin: 0 auto;
`
const Id = styled.div`
`
const Label = styled.label`
  display: inline-block;
  width: 119px;
  height: 115px;
  & > svg {
    color: red;
  }
`
const Pass = styled.div`
  margin-top: 116px;
`
const Log = styled.div`
  
`
const Idinput = styled.input`
  width: 625px;
  height: 115px;
  border: none;
  background-color: #ffadad;
  border-radius: 0 25px 25px 0;
`
const Passinput = styled.input`
  
`
const Logbutton = styled.input`
  
`