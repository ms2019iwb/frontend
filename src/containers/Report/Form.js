import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Form/InputWithIcon';

class Form extends Component {
  render() {
    return(
      <Root>
        <Input />
      </Root>
    );
  }
}

export default Form;

const Root = styled.form`
`