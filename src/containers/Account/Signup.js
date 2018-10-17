import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './components/Top';
import TabList from './components/TabList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'

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
          <Nav>
            <TabList />
          </Nav>
          <Box>
            <IconWarp>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWarp>
            <Input type="text" placeholder="メールアドレス" value={this.state.data.id} onChange={this.txtChange} name="id" ></Input>
          </Box>
          <Box>
            <IconWarp>
              <FontAwesomeIcon icon={faKey} />
            </IconWarp>
            <Input type="password" placeholder="パスワード" value={this.state.data.pass} onChange={this.txtChange} name="pass" ></Input>
          </Box>
          <Box>
            <IconWarp>
              <FontAwesomeIcon icon={faUser} />
            </IconWarp>
            <Input type="text" placeholder="ニックネーム" value={this.state.data.name} onChange={this.txtChange} name="name" ></Input>
          </Box>
          <Button href="" onClick={this._onClickHandler}>登録</Button>
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

  const Box = styled.p`
    display: flex;
    height: 6rem;
    margin-bottom:75px;

    & > svg {
      background-color:#EF5A5A;
      font-size:80px;
    }
`

const IconWarp = styled.div`
  display: -webkit-inline-flex;
  display: inline-flex;
  justify-content: center;
  background-color: #EF5A5A;
  width:6rem;
  height: 6rem;
  padding:1.5rem 3rem;
  font-size:3rem;
  color: #fff;
  box-shadow: 0px -1px -1px 0px rgba(0,0,0,0.4);
  border-radius: 15px 0 0 15px;
  border-right:1px #707070 solid;
`

const Button = styled.a`
    background-color: #EF5A5A;
    color: #ffffff;
    border-radius: 10px;
    font-size: 2rem;
    flex-wrap: wrap;
    width: 150px;
    height:50px;
    padding-top:10px;
`

const Input = styled.input`
  color: #fff;
  width: 50rem;
  height:6rem;
  font-size: 2rem;
  padding: 0 1.6rem;
  border: 2px solid #FFADAD;
  border-radius: 0px 1.5rem 1.5rem 0px;
  background-color:#FFADAD;
  &::-webkit-input-placeholder{
    color: #ffffff;
  }
`;