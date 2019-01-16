import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';

const Loading = (props) => {
  return(
    <Root>
      <Modal>
        <Icon icon={faSync} spin />
        <Content>{props.text}</Content>
      </Modal>
    </Root>
  );
}

export default Loading;

Loading.defaultProps = {
  text: 'ロード中'
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #333;
  width: 300px;
  height: 300px;
`

const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 30px;
  font-size: 6rem;
  color: #fff;
`

const Content = styled.p`
  font-size: 2rem;
  color: #fff;
`