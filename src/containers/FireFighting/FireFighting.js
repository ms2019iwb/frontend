import React, { Component } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// 環境変数
import Variable from '../../variables/Variable';

class FireFighting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 火災レポート情報
      report: {
        title: '',
        report_status: '',
        ambulance_status: '',
        fire_fighting_status: '',
        address: '',
        lat: '',
        lng: '',
        post_user_id: '',
        created_at: '',
        updated_at: ''
      },
      // 消火ステータス初期100%
      fireFightingStatus: 100,
      // 何%ずつ減らすか
      statusDownValue: 25,
      // 消火実行状態
      updateFlag: false
    }
  }

  // 消火ステータスアップデート開始(消火活動開始)
  startUpdateStatus = event => {
    event.preventDefault();

    this.setState({
      updateFlag: true
    });

    // Web Speech API
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = '消火活動開始。息を吹きかけてください。';
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  // 消火ステータスアップデート中止(消火活動中止)
  stopUpdateStatus = event => {
    event.preventDefault();

    this.setState({
      updateFlag: false
    });

    // Web Speech API
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = '消火活動を中止しました。';
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  // 消火ステータスアップデート終了(消火活動終了)
  endUpdateStatus() {
    this.setState({
      updateFlag: false
    });

    // Web Speech API
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = '消火活動終了。火災を鎮火しました。';
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);

    // 火災レポートの消火ステータスを更新
    this.updateReport();
  }

  // 消火ステータスアップデート実行(消火活動中)
  updateStatus = event => {
    event.preventDefault();
    console.log(event.key);

    if(event.key === '5') {
      const setValue = this.state.fireFightingStatus - this.state.statusDownValue;
      this.setState({
        fireFightingStatus: setValue
      });
      if(setValue === 0) {
        this.endUpdateStatus();
      } else {
        // Web Speech API
        let ssu = new SpeechSynthesisUtterance();
        ssu.text = `残り${this.state.fireFightingStatus}%`;
        ssu.lang = 'ja-JP';
        speechSynthesis.speak(ssu);
      }
    }
  }

  // 火災レポート1件取得
  getReport() {
    console.log(`【frego-api】HTTPリクエスト開始: GET /posts/${this.props.computedMatch.params.id}`);

    axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/posts/${this.props.computedMatch.params.id}`)
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            report: {
              title: response.data.title,
              report_status: response.data.report_status,
              ambulance_status: response.data.ambulance_status,
              fire_fighting_status: response.data.fire_fighting_status,
              address: response.data.address,
              lat: response.data.lat,
              lng: response.data.lng,
              post_user_id: response.data.post_user_id
            }
          });
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  // 火災レポート1件更新
  updateReport() {
    const data = {
      title: this.state.report.title,
      report_status: this.state.report.report_status,
      ambulance_status: this.state.report.ambulance_status,
      fire_fighting_status: '2',
      address: this.state.report.address,
      lat: this.state.report.lat,
      lng: this.state.report.lng,
      post_user_id: this.state.report.post_user_id
    };

    console.log(`【frego-api】HTTPリクエスト開始: PATCH /posts/${this.props.computedMatch.params.id}`);

    axios
      .patch(`${Variable.FREGO_API_BASE_ENDPOINT}/posts/${this.props.computedMatch.params.id}`, { post: data })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          // 更新後のデータを取得
          this.getReport();
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  componentDidMount() {
    this.getReport();

    window.addEventListener('keydown', (event) => {
      console.log(this.state.updateFlag);
      if(this.state.updateFlag === true) {
        this.updateStatus(event);
      }
    });
  }

  render() {
    return(
      <Root>
        <Header />
        <Main>
          <Title>消火活動<br />{this.state.report.title}</Title>
          <DetailLink to={`/report/${this.props.computedMatch.params.id}`}>火災レポート詳細へ戻る</DetailLink>
          {(() => {
            if(this.state.report.fire_fighting_status === '2') {
              return <Description>鎮火は完了しました<FontAwesomeIcon icon={faCheckCircle} /></Description>;
            } else if(this.state.report.fire_fighting_status === '1' && this.state.updateFlag === false) {
              return <ActionButton onClick={this.startUpdateStatus}>開始</ActionButton>;
            } else if(this.state.updateFlag === true) {
              return(
                <React.Fragment>
                  <Description updateFlag={this.state.updateFlag}>息を吹きかけてください<FontAwesomeIcon icon={faWind} /></Description>
                  <ActionButton onClick={this.stopUpdateStatus}>中止</ActionButton>
                  <Status>鎮火まで残り{this.state.fireFightingStatus}%</Status>
                  <Barometer status={this.state.fireFightingStatus}></Barometer>
                </React.Fragment>
              );
            }
          })()}
        </Main>
      </Root>
    );
  }
}

export default FireFighting;

const Root = styled.div`
  width: 100%;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
`

const Title = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
`

const DetailLink = styled(Link)`
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
  text-decoration: underline;
`

const ActionButton = styled.div`
  margin-bottom: 30px;
  background-color: #009f9d;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`

const Status = styled.div`
  margin-bottom: 10px;
  font-size: 3rem;
`

const Barometer = styled.div`
  position: relative;
  border: solid 3px #333;
  width: 1000px;
  height: 100px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: crimson;
    width: ${props => props.status}%;
    height: 100%;
  }
`

const Description = styled.div`
  /* display: ${props => props.updateFlag ? 'block' : 'none'}; */
  margin-bottom: 30px;
  font-size: 5rem;
`