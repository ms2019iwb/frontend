import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import Variable from '../variables/Variable';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 炎上中総数
      burnNumber: 0,
      // 消火済み総数
      exNumber: 0,
      // 最新のレポート
      latestReport: {
        id: 0,
        title: '',
        fire_fighting_status: '',
        created_at: '',
        updated_at: ''
      }
    }
  }

  async componentDidMount() {
    await this.fetchBurnCount();
    await this.fetchExCount();
    await this.fetchLatestReport();
  }

  // 炎上中総数取得
  fetchBurnCount() {
    return new Promise((resolve, reject) => {
      console.log('【frego-api】HTTPリクエスト開始: GET /burncount');

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
      console.log('【frego-api】HTTPリクエスト開始: GET /excount');

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

  // 最新の投稿取得
  fetchLatestReport() {
    return new Promise((resolve, reject) => {
      console.log('【frego-api】HTTPリクエスト開始: GET /lastpost');

      axios
        .get(`${Variable.FREGO_API_BASE_ENDPOINT}/lastpost`)
        .then(response => {
          if(response.data) {
            console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
            // 日付整形
            const cdt = new Date(response.data.created_at);
            const preformattedCreatedAt = `${cdt.getFullYear()}/${cdt.getMonth()+1}/${cdt.getDate()} ${cdt.getHours()}:${cdt.getMinutes()}`;
            const udt = new Date(response.data.updated_at);
            const preformattedUpdatedAt = `${udt.getFullYear()}/${udt.getMonth()+1}/${udt.getDate()} ${udt.getHours()}:${udt.getMinutes()}`;
            this.setState({
              latestReport: {
                id: response.data.id,
                title: response.data.title,
                fire_fighting_status: response.data.fire_fighting_status,
                created_at: preformattedCreatedAt,
                updated_at: preformattedUpdatedAt
              }
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
          <SectionTitle>最新の投稿</SectionTitle>
          <Tocontents>
            <Totext>
              <Place>
                <LatestReportLink to={`/report/${this.state.latestReport.id}`}>{this.state.latestReport.title}</LatestReportLink>
              </Place>
              <Potime>発生日時：{this.state.latestReport.created_at}</Potime>
              <Uptime>更新日時：{this.state.latestReport.updated_at}</Uptime>
            </Totext>
            <Toimage><StatusIcon iconColor={() => {
              switch(this.state.latestReport.fire_fighting_status) {
                // 未消火
                case '1':
                  return '#ff000f';
                  break;
                // 消火済み
                case '2':
                  return '#254fae';
                  break;
                // 不明
                case '3':
                  return '#777';
                  break;
              }
            }} icon={faFire} /></Toimage>
          </Tocontents>
          <ListLink to="/report">投稿一覧</ListLink>
        </Toppost>
        <Newupdate>
          <SectionTitle>最近の更新</SectionTitle>
          <Necontents>
            <Netext>XXX県XXX市XXX町XX-X の火災レポートの概要が更新されました。</Netext>
            <Netext>YYY県YYY市YYY町YY-Y の火災レポートに新規のコメントがあります。</Netext>
            <Netext>ZZZ県ZZZ市ZZZ町ZZ-Z の火災レポートに新規のコメントがあります。</Netext>
            <Netext>AAA県AAA市AAA町AA-A の火災レポートに新規のコメントがあります。</Netext>
            <Netext>XXX県XXX市XXX町XX-X の火災レポートの概要が更新されました。</Netext>
          </Necontents>
          <ListLink to="">更新一覧</ListLink>
        </Newupdate>
      </Root>
    );
  }
}

export default Top;

const Root = styled.div``

const Title = styled.h1`
  margin: 32px 0 30px 0;
  color: #ff000f;
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
  background-color: #F84F59;
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
  background-color: #554FF8;
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

const SectionTitle = styled.div`
  line-height: 36px;
  font-size: 2.4rem;
  color: #FF000F;
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
  line-height: 35px;
`

const LatestReportLink = styled(Link)`
  font-size: 2rem;
  text-decoration: underline;
  color: #3f2b2b;
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
`

const StatusIcon = styled(FontAwesomeIcon)`
  font-size: 5.8rem;
  color: ${props => props.iconColor};
`

const ListLink = styled(Link)`
  display: block;
  border-radius: 5px;
  background-color: #FF000F;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 2.4rem;
  color: #FFFFFF;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  }
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