import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../../App.css';

class Tab extends Component {
  render() {
    return (
      <Tabutton color={this.props.color} activeColor={this.props.activeColor} to={this.props.to}>
        {this.props.text}
      </Tabutton>
    );
  }
}

Tab.defaultProps = {
  color: '#707070',
  activeColor: '#e95252',
  to: '/',
  text: ''
};

export default Tab;

const Tabutton = styled(NavLink)`
  display: block;
  border-bottom: solid 1px ${props => props.color};
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 2.4rem;
  color: ${props => props.color};

  &.active {
    border-bottom: solid 3px ${props => props.activeColor};
    color: ${props => props.activeColor};
  }
`