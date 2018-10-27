import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

class Report extends Component {

  render() {
    return(
      <Root>
        <Title>一覧</Title>
          <Wrap>
            <Column>
              <a href="../" target="_blank" rel="noreferrer noopener">
                <Headline>発生場所<Text>〒457-0011 愛知県名古屋市南区呼続元町27</Text></Headline>
                <Headline>発生日時<Text>2019/01/12 07:44</Text></Headline>
                <Headline>更新日時<Text>2019/01/12 07:52</Text></Headline>
                <Headline>消火ステータス<Text>(アイコン)</Text></Headline>
              </a>
            </Column>
            <Column>
              <a href="../" target="_blank" rel="noreferrer noopener">
                <Headline>発生場所<Text>〒464-0067 愛知県名古屋市千種区池下1丁目 4−11</Text></Headline>
                <Headline>発生日時<Text>2019/01/12 10:04</Text></Headline>
                <Headline>更新日時<Text>2019/01/12 10:04</Text></Headline>
                <Headline>消火ステータス<Text>(アイコン)</Text></Headline>
              </a>
            </Column>
            <Column>
              <a href="../" target="_blank" rel="noreferrer noopener">
                <Headline>発生場所<Text>〒470-0312 愛知県豊田市中金町前田 766</Text></Headline>
                <Headline>発生日時<Text>2019/01/12 10:24</Text></Headline>
                <Headline>更新日時<Text>2019/01/12 10:24</Text></Headline>
                <Headline>消火ステータス<Text>(アイコン)</Text></Headline>
              </a>
            </Column>
          </Wrap>
      </Root>
    );
  }
}

export default Report;

const Root = styled.form`
  display: flex;
  width: 100%;
  height: 100vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Wrap = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  color: #FB7D79;
  font-size: 500%;
  margin-bottom: 3rem;
`

const Column = styled.a`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding-left: 2%;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 20px;
  background-color: #FB9D7E;
`

const Headline = styled.h1`
  color: #F8CD9E;
  font-size: 200%;
  margin: 10px 0;
`

const Text = styled.p`
  color: #AE9890;
  font-size: 150%;
`
