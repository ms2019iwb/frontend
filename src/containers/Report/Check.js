import React, { Component } from 'react';
import styled from 'styled-components';
import LocationService from '../../services/LocationService';
import Loading from '../../components/Modal/Loading';
import Header from '../../components/Header';
import Map from '../../components/Map';
import axios from 'axios';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Variable from '../../variables/Variable';

class ReportCheck extends Component {
  constructor(props) {
    super(props);
    this.locationService = new LocationService();
    this.state = {
      // ロード状態
      loadingStatus: 'locationLoading',
      // 現在位置
      fullAddress: '',
      prefectureCity: '',
      currentPosition : {
        lat: 0.0,
        lng: 0.0
      }
    }
  }

  async componentDidMount() {
    // 現在位置の取得
    const position = await this.locationService.getCurrentPosition();

    this.setState({
      currentPosition : {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });

    // 逆ジオコーディング
    const address = await this.locationService.getGeocodeFromLatLng(this.state.currentPosition.lat, this.state.currentPosition.lng);

    this.setState({
      loadingStatus: 'nothing',
      fullAddress: address.formattedAddress,
      prefectureCity: address.administrativeLevels.level1long + address.city
    });

    console.log(this.state);

    this.getCurrentDate();
  }

  yesLocationSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.getCurrentDate() + ' ' + this.state.prefectureCity + 'の火災',
      report_status: '',
      ambulance_status: '',
      fire_fighting_status: '1',
      address: this.state.fullAddress,
      lat: this.state.currentPosition.lat,
      lng: this.state.currentPosition.lng,
      post_user_id: JSON.parse(sessionStorage.getItem('loginUser')).id
    };

    this.postData(data);
  }

  noLocationSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.getCurrentDate() + ' 位置情報無しの火災',
      report_status: '',
      ambulance_status: '',
      fire_fighting_status: '1',
      address: '',
      lat: '',
      lng: '',
      post_user_id: JSON.parse(sessionStorage.getItem('loginUser')).id
    };

    this.postData(data);
  }

  postData(data) {
    this.setState({
      loadingStatus: 'registrationLoading'
    });

    console.log('【frego-api】HTTPリクエスト開始: POST /posts');

    axios
      .post(`${Variable.FREGO_API_BASE_ENDPOINT}/posts`, { post: data })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          // リダイレクト
          this.props.history.push(`/report/${response.data.id}/form/`);
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  pageReturn = event => {
    event.preventDefault();
    //リダイレクト
    this.props.history.push('/');
  }

  getCurrentDate() {
    const dateTime = new Date();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const date = dateTime.getDate();
    return(year + '/' + month + '/' + date);
  }

  render() {
    switch (this.state.loadingStatus) {
      case 'locationLoading':
        return(
          <Loading text="位置情報取得中"/>
        );
      case 'registrationLoading':
        return(
          <Loading text="登録中" />
        );
      default:
        return(
          <Root>
            <Header />
            <Main>
              <Map position={this.state.currentPosition} />
              <Confirm>
                <Description>火災の現場にいる場合、火災はすぐに<Br />位置情報と共に報告されます。</Description>
                <Question>火災の現場にいますか？</Question>
                <AnswerList>
                  <AnswerItem onClick={this.yesLocationSubmit}>はい</AnswerItem>
                  <AnswerItem onClick={this.noLocationSubmit}>いいえ</AnswerItem>
                </AnswerList>
                <Cancel onClick={this.pageReturn}>
                  <Icon icon={faTimes} />
                  <Text>キャンセル</Text>
                </Cancel>
              </Confirm>
            </Main>
          </Root>
        );
    }
  }
}

export default withRouter(ReportCheck);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Main = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
`

const Confirm = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 20px;
  width: 800px;
  height: 250px;

  @media screen and (max-width: 1100px) {
    bottom: 12px;
    width: 340px;
    height: 200px;
  }
`

const Description = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.6rem;
  color: #254FAE;

  @media screen and (max-width: 1100px) {
    margin-bottom: 6px;
    font-size: 1.2rem;
  }
`

const Br = styled.br`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`

const Question = styled.p`
  margin-bottom: 10px;
  border-bottom: solid 1px #254FAE;
  font-size: 2.2rem;
  color: #254FAE;

  @media screen and (max-width: 1100px) {
    margin-bottom: 10px;
    font-size: 1.6rem;
  }
`

const AnswerList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  width: 300px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 11px;
    width: 200px;
  }
`

const AnswerItem = styled.li`
  background-color: #FF000F;
  border-radius: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 2.4rem;
  color: #fff;

  &:last-child {
    background-color: #3B35F7;
  }

  @media screen and (max-width: 1100px) {
    width: 75px;
    height: 75px;
    line-height: 75px;
    font-size: 1.8rem;
  }
`

const Cancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #254FAE;
  width: 111px;
  height: 30px;

  @media screen and (max-width: 1100px) {
    width: 85px;
    height: 25px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  line-height: 30px;
  font-size: 1rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    line-height: 22px;
    font-size: 1rem;
  }
`

const Text = styled.p`
  line-height: 30px;
  font-size: 1.4rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    line-height: 25px;
    font-size: 1.2rem;
  }
`