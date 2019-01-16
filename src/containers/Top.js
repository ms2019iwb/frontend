import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import Variable from '../variables/Variable';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 炎上中総数
      burnNumber: 0,
      // 消火済み総数
      exNumber: 0
    }
  }

  async componentDidMount() {
    await this.fetchBurnCount();
    await this.fetchExCount();
  }

  // 炎上中総数取得
  fetchBurnCount() {
    return new Promise((resolve, reject) => {
      console.log('【frego-api】HTTPリクエスト開始: GET /posts/burncount');

      axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/burncount`)
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            burnNumber: response.data
          });
          resolve();
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了', error);
        reject();
      });
    });
  }

  // 消火済み総数取得
  fetchExCount() {
    return new Promise((resolve, reject) => {
      console.log('【frego-api】HTTPリクエスト開始: GET /posts/excount');

      axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/excount`)
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            exNumber: response.data
          });
          resolve();
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了', error);
        reject();
      });
    });
  }

  render() {
    return (
      <Root>
        <Header />
        <Title>ダッシュボード</Title>
        <Countzone>
          <Firecount>
            <Finumber>{this.state.burnNumber}件</Finumber>
            <Fitext>炎上中<FontAwesomeIcon icon={faFire} /></Fitext>
          </Firecount>
          <Extinguishingcount>
            <Exnumber>{this.state.exNumber}件</Exnumber>
            <Extext>消火済み<FontAwesomeIcon icon={faFireExtinguisher} /></Extext>
          </Extinguishingcount>
        </Countzone>
        <Toppost>
          <Totitle>
            最新の投稿
          </Totitle>
          <Tocontents>
            <Totext>
              <Place>発生場所：XXX県XXX市XXX町XX-X</Place>
              <Potime>発生日時：XXXX年XX月XX日</Potime>
              <Uptime>更新日時：XXXX年XX月XX日</Uptime>
            </Totext>
            <Toimage><FontAwesomeIcon icon={faFire} /></Toimage>
          </Tocontents>
          <Postlist>
            投稿一覧
          </Postlist>
        </Toppost>
        <Newupdate>
          <Netitle>
            最近の更新
          </Netitle>
          <Necontents>
            <Netext>XXX県XXX市XXX町XX-X の火災レポートの概要が更新されました。</Netext>
            <Netext>YYY県YYY市YYY町YY-Y の火災レポートに新規のコメントがあります。</Netext>
            <Netext>ZZZ県ZZZ市ZZZ町ZZ-Z の火災レポートに新規のコメントがあります。</Netext>
            <Netext>AAA県AAA市AAA町AA-A の火災レポートに新規のコメントがあります。</Netext>
            <Netext>XXX県XXX市XXX町XX-X の火災レポートの概要が更新されました。</Netext>
          </Necontents>
          <Uplist>更新一覧</Uplist>
        </Newupdate>
      </Root>
    );
  }
}

export default Top;

const Root = styled.div``

const Title = styled.h1`
  margin: 32px 0 30px 0;
  color: #A552DD;
  font-size: 2.6rem;
  text-align: center;
`

const Countzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;
  color: #FFFFFF;
  text-align: center;
`

const Firecount = styled.div`
  width: 350px;
  margin-right: 102px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
  background-color: #ec1d1d;
`

const Finumber = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  height: 150px;
  border-bottom: 1px solid #FFFFFF;
  font-size: 3.2rem;
  line-height: 150px;
`

const Fitext = styled.div`
  height: 50px;
  font-size: 2rem;
  line-height: 50px;
  & > svg{
    margin-left: 6px;
  }
`

const Extinguishingcount = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 350px;
  border: 1px solid #707070;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
  background-color: #254FAE;
`

const Exnumber = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  height: 150px;
  border-bottom: 1px solid #FFFFFF;
  font-size: 3.2rem;
  line-height: 150px;
`

const Extext = styled.div`
  height: 50px;
  font-size: 2rem;
  line-height: 50px;
  & > svg{
    margin-left: 6px;
  }
`

const Toppost = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 22px;
`

const Totitle = styled.div`
  color: #A552DD;
  font-size: 2.4rem;
  line-height: 36px;
`

const Tocontents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  border: 1px solid #707070;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
`

const Totext = styled.div`
  width: 699px;
  border-right: 1px solid #707070;
`

const Place = styled.div`
  padding-left: 11px;
  border-bottom: 1px solid #707070;
  color: #3F2B2B;
  font-size: 2rem;
  line-height: 35px;
`

const Potime = styled.div`
  padding-left: 11px;
  color: #3F2B2B;
  font-size: 2rem;
  line-height: 31px;
`

const Uptime = styled.div`
  padding-left: 11px;
  color: #3F2B2B;
  font-size: 2rem;
  line-height: 31px;
`

const Toimage = styled.div`
  width: 100px;
  text-align: center;
  & > svg{
    width: 58px !important;
    height: auto !important;
    color: #ec1d1d;
  }
`

const Postlist = styled.div`
  height: 40px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  background-color: #8639ba;
  color: #FFFFFF;
  font-size: 2.4rem;
  line-height: 40px;
  text-align: center;
`

const Newupdate = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 112px;
`

const Netitle = styled.div`
  color: #A552DD;
  font-size: 2.4rem;
  line-height: 36px;
`

const Necontents = styled.div`
  margin-bottom: 11px;
  border: 1px solid #707070;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
`

const Netext = styled.div`
  padding-left: 8px;
  color: #3F2B2B;
  font-size: 2rem;
  line-height: 54px;

  &:not(:last-child) {
    border-bottom: 1px solid #707070;
  }
`

const Uplist = styled.div`
  height: 40px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  background-color: #8639ba;
  color: #FFFFFF;
  font-size: 2.4rem;
  line-height: 40px;
  text-align: center;
`