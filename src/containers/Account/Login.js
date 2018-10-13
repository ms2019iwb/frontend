import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'

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
            <Id>
              <Label for="mail">
                <FontAwesomeIcon icon={faEnvelope} />
              </Label>
              <Input type="input" id="mail" name="mail" placeholder="メールアドレス" value={this.state.data.mail} onChange={this.handleChange}></Input>
            </Id>
            <Pass>
              <Label for="pass">
                <FontAwesomeIcon icon={faKey} />
              </Label>
              <Input type="password" id="pass" name="pass" placeholder="パスワード" value={this.state.data.pass} onChange={this.handleChange}></Input>
            </Pass>
            <Log>
              <Logbutton type="submit" value="ログイン"></Logbutton>
            </Log>
          </Inputwrap>
        </Form>
      </Root>
    );
  }
}

export default Login;

const Root = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`
const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translateY(-50%) translateX(-75%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: 600px;
`
const Inputwrap = styled.div`
  margin-top: 229px;
`
const Id = styled.div`
  text-align: center;
`
const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  border-right: 1px solid #707070;
  border-radius: 15px 0 0 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  background-color: #ef5a5a;
  vertical-align: top;
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    width: 34px !important;
    height: auto;
    color: #ffffff;
    vertical-align: middle;
  }
`
const Pass = styled.div`
  margin-top: 101px;
  text-align: center;
`
const Log = styled.div`
  margin-top: 178px;
  text-align: center;
`
const Input = styled.input`
  width: 500px;
  height: 60px;
  padding-left: 13px;
  border: none;
  background-color: #ffadad;
  border-radius: 0 15px 15px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  color: #ffffff;
  font-size: 2rem;
  &::-webkit-input-placeholder{
    color: #ffffff;
  }
`
const Logbutton = styled.input`
  width: 150px;
  height: 50px;
  border: none;
  box-shadow: #DF0000 0px 0px 10px;
  background-color: #ef5a5a;
  border-radius: 10px;
  color: #ffffff;
  font-size: 2rem;
`