import React, { Component } from 'react';
import styled from 'styled-components';
import Status from '../../components/Form/Status';
import Button from '../../components/Form/Button';
import Icon from '../../components/Form/Icon';
import Commentframe from '../../components/Form/Commentframe';
import Header from '../../components/Header';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
// 環境変数
import Variable from '../../variables/Variable';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  componentDidMount() {
    console.log(`【frego-api】HTTPリクエスト開始: GET /posts/${this.props.computedMatch.params.id}`);

    // 火災レポート1件取得
    axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/posts/${this.props.computedMatch.params.id}`)
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            title: response.data.title,
            report_status: response.data.report_status,
            ambulance_status: response.data.ambulance_status,
            fire_fighting_status: response.data.fire_fighting_status,
            address: response.data.address,
            lat: response.data.lat,
            lng: response.data.lng,
            post_user_id: response.data.post_user_id,
            created_at: response.data.created_at,
            updated_at: response.data.updated_at
          });
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  render() {
    return(
      <Root>
        <Header />
        <DetailHeader>
          <Title>{this.state.title}</Title>
          <DateTimeList>
            <CreatedAt>発生日時：{this.state.created_at}</CreatedAt>
            <UpdatedAt><UpdateAtIcon icon={faPen} />{this.state.updated_at}</UpdatedAt>
          </DateTimeList>
          <Etc><EtcIcon icon={faFire} />発生場所：{this.state.address !== '' ? this.state.address : '位置情報無し' }</Etc>
          <Etc><EtcIcon icon={faUser} />投稿者：{this.state.post_user_id}さん</Etc>
          <StatusList>
            <StatusItem>
              <StatusName>通報</StatusName>
              <Status backgroundColor={this.state.report_status === '1' ? '#bfafaf' : '#fff'} borderRadius='10px 0 0 10px' color={this.state.report_status === '1' ? '#fff' : '#bfafaf'} text='未通報' />
              <Status backgroundColor={this.state.report_status === '2' ? '#bfafaf' : '#fff'} borderRadius='0' color={this.state.report_status === '2' ? '#fff' : '#bfafaf'} text='通報済み' />
              <Status backgroundColor={this.state.report_status === '3' ? '#bfafaf' : '#fff'} borderRadius='0 10px 10px 0' color={this.state.report_status === '3' ? '#fff' : '#bfafaf'} text='不明' />
            </StatusItem>
            <StatusItem>
              <StatusName>救急車</StatusName>
              <Status backgroundColor={this.state.ambulance_status === '1' ? '#bfafaf' : '#fff'} borderRadius='10px 0 0 10px' color={this.state.ambulance_status === '1' ? '#fff' : '#bfafaf'} text='未到着' />
              <Status backgroundColor={this.state.ambulance_status === '2' ? '#bfafaf' : '#fff'} borderRadius='0' color={this.state.ambulance_status === '2' ? '#fff' : '#bfafaf'} text='到着済み' />
              <Status backgroundColor={this.state.ambulance_status === '3' ? '#bfafaf' : '#fff'} borderRadius='0' color={this.state.ambulance_status === '3' ? '#fff' : '#bfafaf'} text='不要' />
              <Status backgroundColor={this.state.ambulance_status === '4' ? '#bfafaf' : '#fff'} borderRadius='0 10px 10px 0' color={this.state.ambulance_status === '4' ? '#fff' : '#bfafaf'} text='不明' />
            </StatusItem>
            <StatusItem>
              <StatusName>消火</StatusName>
              <Status backgroundColor={this.state.fire_fighting_status === '1' ? '#bfafaf' : '#fff'} borderRadius='10px 0 0 10px' color={this.state.fire_fighting_status === '1' ? '#fff' : '#bfafaf'} text='未消火' />
              <Status backgroundColor={this.state.fire_fighting_status === '2' ? '#bfafaf' : '#fff'} borderRadius='0' color={this.state.fire_fighting_status === '2' ? '#fff' : '#bfafaf'} text='消火済み' />
              <Status backgroundColor={this.state.fire_fighting_status === '3' ? '#bfafaf' : '#fff'} borderRadius='0 10px 10px 0' color={this.state.fire_fighting_status === '3' ? '#fff' : '#bfafaf'} text='不明' />
            </StatusItem>
          </StatusList>
          <Buttonwrap>
            <Editing>
              <Button
                width='89px'
                height='30px'
                border='1px solid #FFFFFF'
                borderradius='10px 10px 10px 10px'
                boxshadow='none'
                backgroundcolor='rgba(255,255,255,0)'
                color='#FFFFFF'
                fontsize='1.4rem'
                text='編集'
              />
            </Editing>
            <Remort>
              <Button
                width='121px'
                height='30px'
                border='none'
                borderradius='10px 10px 10px 10px'
                boxshadow='none'
                backgroundcolor='#F2F77C'
                color='#2D0505'
                fontsize='1.4rem'
                text='リモート救助'
              />
            </Remort>
          </Buttonwrap>
        </DetailHeader>
        <Chat>
          <Chatwrap>
            <Chattext>
              <Textarea placeholder="追加情報を報告してください"></Textarea>
              <Button
                width='75px'
                height='30px'
                border='none'
                borderradius='5px 5px 5px 5px'
                boxshadow='0px 0px 4px #F58989'
                backgroundcolor='#F58989'
                color='#FFFFFF'
                fontsize='1.4rem'
                text='送信'
              />
            </Chattext>
            <Chatcommentwrap>
              <Chatcomment>
                <Iconwrap>
                  <Icon icon={faUser} />
                </Iconwrap>
                <Commentframewrap>
                  <Commentframe text='コメントが入ります。' />
                </Commentframewrap>
              </Chatcomment>
              <Chatcomment>
                <Iconwrap>
                  <Icon icon={faUser} />
                </Iconwrap>
                <Commentframewrap>
                  <Commentframe text='コメントが入ります。' />
                </Commentframewrap>
              </Chatcomment>
              <Chatcomment>
                <Iconwrap>
                  <Icon icon={faUser} />
                </Iconwrap>
                <Commentframewrap>
                  <Commentframe text='コメントが入ります。' />
                </Commentframewrap>
              </Chatcomment>
            </Chatcommentwrap>
          </Chatwrap>
        </Chat>
      </Root>
    );
  }
}

export default Details;

const Root = styled.div``

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #254FAE;
  background-color: #F58989;
  padding: 20px 0;
  width: 100%;
  color: #fff;
`

const Title = styled.p`
  margin-bottom: 24px;
  font-size: 2.6rem;
  font-weight: bold;
`

const DateTimeList = styled.ul`
  display: flex;
  margin-bottom: 3px;
`

const CreatedAt = styled.li`
  margin-right: 950px;
  font-size: 2rem;
`

const UpdatedAt = styled.li`
  font-size: 2.4rem;
`

const UpdateAtIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`

const Etc = styled.p`
  margin-bottom: 23px;
  font-size: 2.4rem;
  
  @media screen and (max-width: 1000px) {
    font-size: 2rem;

    & > svg {
      width: 15px !important;
      height: auto !important;
      margin-right: 4px;
    }
  }
`

const EtcIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  vertical-align: baseline;
`

const StatusList = styled.ul`
  margin-bottom: 36px;
`

const StatusItem = styled.li`
  display: flex;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 19px;
  }
`

const StatusName = styled.p`
  width: 60px;
  margin-right: 19px;
  font-size: 2rem;
  text-align: right;
`

const Buttonwrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 36px;
`

const Editing = styled.div`
  margin-right: 30px;
`

const Remort = styled.div`
`

const Chat = styled.div`
  background-color: rgba(191,154,154,0.2);
  
  @media screen and (max-width: 1000px) {
    background-color: #FFFFFF;
  }
`

const Chatwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Chattext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 22px;
  margin-bottom: 15px;
  padding-left: 75px;
  
  @media screen and (max-width: 1000px) {
    padding-left: 0;
  }
`

const Textarea = styled.textarea`
  width: 400px;
  height: 100px;
  margin-bottom: 19px;
  padding: 4px 6px;
  border: 1px solid #F58989;
  border-radius: 10px;

  &::-webkit-input-placeholder{
    color: #F58989;
    font-size: 1.4rem;
  }
  
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
`

const Chatcommentwrap = styled.div`
  padding-bottom: 34px;
`

const Chatcomment = styled.div`
  display: flex;
  margin-bottom: 25px;
`

const Iconwrap = styled.div`
  margin-right: 25px;
  
  @media screen and (max-width: 1000px) {
    margin-right: 18px;
  }
`

const Commentframewrap = styled.div`
`