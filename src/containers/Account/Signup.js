import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';

class Signup extends Component {
  state = {
    data: {
      id: '',
      pass: '',
      name: ''
    }
  };

  txtChange = event =>{
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
          <Logo>
            insert<br/>LOGO
          </Logo>
          <TabList />
          <Title>
            新規登録画面
          </Title>
          <Box>
            frgoのIDを入力<Input type="text" placeholder="例)frgo555" value={this.state.data.id} onChange={this.txtChange} name="id" ></Input>
          </Box>
          <Box>
            パスワードを入力<Input type="password" placeholder="例)frgo9999" value={this.state.data.pass} onChange={this.txtChange} name="pass" ></Input>
          </Box>
          <Box>
          公開名を入力<Input type="text" placeholder="例)火気厳禁" value={this.state.data.name} onChange={this.txtChange} name="name" ></Input>
          </Box>
          <Box>
          <A>登録</A>
          </Box>
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
  text-align:center;
  color: #b9b9b9;
`

const Form = styled.form`
  width:50%;
`

const Logo = styled.h1`
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #00ffb3;
  height: 100px;
`

const Title = styled.p`
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #5b5b5b;
  height: 100px;
  margin:5% 0;
`

const Box = styled.p`
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #5b5b5b;
  width: 100%;
`

const A = styled.p`
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  text-align:center;
  width:25%;
  margin: 10% auto;
  color: #ffffff;
  background-color:#89f3cc;
  text-decoration: none;
`

const Input = styled.input.attrs({
  // we can define static props
  type: "password",
  // or we can define dynamic ones
  margin: props => props.size || "1em",
  padding: props => props.size || "1em"
})`
  color: #89f3cc;
  width:70%;
  font-size: 70%;
  border: 2px solid #89f3cc;
  border-radius: 3px;
  

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;