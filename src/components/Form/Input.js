import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
  render() {
    return(
      <Radiowrap>
        <Radioinput type='radio' name={this.props.name} value={this.props.value} id={this.props.id}></Radioinput>
        <Label for={this.props.id} borderradius={this.props.borderradius}>
          {this.props.text}
        </Label>
      </Radiowrap>
    );
  }
}

Input.defaultProps = {
  name: '',
  value: '',
  id: '',
  borderradius: '0px 0px 0px 0px',
  text: ''
};

export default Input;

const Radiowrap = styled.div`
`

const Radioinput = styled.input`
  display: none;

  &:checked + label{
    background-color: #254FAE;
    color: #FFFFFF;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 80px;
  height: 35px;
  border: 1px solid #254FAE;
  border-radius: ${props => props.borderradius};
  color: #254FAE;
  font-size: 1.4rem;
  }
`