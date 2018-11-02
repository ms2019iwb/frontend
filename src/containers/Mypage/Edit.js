import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithIcon from '../../components/Form/InputWithIcon';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';


class Edit extends Component {

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
        <Title>
          アカウント情報変更
        </Title>
        <InputWithIcon
            mbSize="125px"
            icon={faUser}
            id="name"
            type="text"
            name="name"
            value={this.state.data.name}
            placeholder="表示名入力欄"
            onChange={this.txtChange}
          />
          <InputWithIcon
            mbSize="125px"
            icon={faKey}
            id="pass"
            type="password"
            name="pass"
            value={this.state.data.pass}
            placeholder="パスワード"
            onChange={this.txtChange}
          />
          <Button text="更新" />
      </Root>
    );
  }
}

export default Edit;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  background: -webkit-linear-gradient(to right, #e5033e, #b701b5, #4a02c2);
  background: linear-gradient(to right, #e5033e, #b701b5, #4a02c2);
  mix-blend-mode: screen;
  color: #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 500%;
  margin-bottom: 3rem;
`
