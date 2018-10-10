import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Tab extends Component {
  render() {
    return (
      <Tabutton
        color={this.props.color}
        activeColor={this.props.activeColor}
        borderPx={this.props.borderPx}
        activeBorderPx={this.props.activeBorderPx}
        to={this.props.to}
      >
        {this.props.text}
      </Tabutton>
    );
  }
}

Tab.defaultProps = {
  color: '#707070',
  activeColor: '#e95252',
  borderPx: '1px',
  activeBorderPx: '3px',
  to: '/',
  text: 'ボタン'
};

export default Tab;

const Tabutton = styled(NavLink)`
  display: block;
  width: 430px;
  line-height: 72px;
  text-align: center;
  border-bottom: ${props => props.borderPx} solid ${props => props.color};
  font-size: 35px;
  color: ${props => props.color};
  font-family: Segoe UI !important;

  &.active {
    color: ${props => props.activeColor};
    border-bottom: ${props => props.activeBorderPx} solid ${props => props.activeColor};
  }
`