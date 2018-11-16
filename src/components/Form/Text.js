import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  return(
    <Report>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        width={props.width}
        height={props.height}
        padding={props.padding}
        border={props.border}
        borderradius={props.borderradius}
        boxshadow={props.boxshadow}
        color={props.color}
        fontsize={props.fontsize}
        textalign={props.textalign}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Report>
  );
};

export default Text;

Text.defaultProps = {
  type: 'text',
  name: '',
  id: '',
  width: '300px',
  height: '35px',
  padding: '0',
  border: 'none',
  borderradius: '0px 0px 0px 0px',
  boxshadow: 'none',
  color: '#000000',
  fontsize: '1rem',
  textalign: 'left',
  placeholder: ''
};

const Report = styled.div`
`

const Input = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderradius};
  box-shadow: ${props => props.boxshadow};
  color: ${props => props.color};
  font-size: ${props => props.fontsize};
  text-align: ${props => props.textalign};
`