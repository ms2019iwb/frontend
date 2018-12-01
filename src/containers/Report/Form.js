import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Form/Input';
import Header from '../../components/Header';
import axios from 'axios';
import { withRouter } from 'react-router';
import Variable from '../../variables/Variable';

class Form extends Component {
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
      comment: ''
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
            post_user_id: response.data.post_user_id
          });
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  formUpdate = event => {
    const updateData = {...this.state};
    updateData[event.target.name] = event.target.value;
    this.setState({
      comment: updateData
    });

    console.log(this.state);
  }

  submitHandler = event => {
    event.preventDefault();

    const data = {
      title: this.state.title,
      report_status: this.state.report_status,
      ambulance_status: this.state.ambulance_status,
      fire_fighting_status: this.state.fire_fighting_status,
      address: this.state.address,
      lat: this.state.lat,
      lng: this.state.lng,
      post_user_id: this.state.post_user_id
    };

    console.log(`【frego-api】HTTPリクエスト開始: PATCH /posts/${this.props.computedMatch.params.id}`);

    axios
      .patch(`${Variable.FREGO_API_BASE_ENDPOINT}/posts/${this.props.computedMatch.params.id}`, { post: data })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          // リダイレクト
          this.props.history.push(`/report/${this.props.computedMatch.params.id}`);
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
        <Mark>マーク</Mark>
        <Message>{this.state.address === '' ? '火災は位置情報無しで報告されました！' : '火災は位置情報と共に報告されました！'}</Message>
        <ReportForm onSubmit={this.submitHandler}>
          <Title>{this.state.title}</Title>
          <Joukyo>詳しい状況をレポートしてください</Joukyo>
          <Radiowrap>
            <Radiotop>
              <Radiotext>通報</Radiotext>
              <Input text='未通報' borderRadius='10px 0 0 10px' name='report_status' value='1' id='mitu' onClick={() => this.setState({report_status: '1'})} />
              <Input text='通報済み' bordeRradius='0' name='report_status' value='2' id='tuhozumi' onClick={() => this.setState({report_status: '2'})} />
              <Input text='不明' borderRadius='0 10px 10px 0' name='report_status' value='3' id='humei' onClick={() => this.setState({report_status: '3'})} />
            </Radiotop>
            <Radiounder>
              <Radiotext>救急車</Radiotext>
              <Input text='未到着' borderRadius='10px 0 0 10px' name='ambulance_status' value='1' id='mito' onClick={() => this.setState({ambulance_status: '1'})} />
              <Input text='到着済み' borderRradius='0' name='ambulance_status' value='2' id='tozumi' onClick={() => this.setState({ambulance_status: '2'})} />
              <Input text='不要' borderRadius='0' name='ambulance_status' value='3' id='huyo' onClick={() => this.setState({ambulance_status: '3'})} />
              <Input text='不明' borderRadius='0 10px 10px 0' name='ambulance_status' value='4' id='unkown' onClick={() => this.setState({ambulance_status: '4'})} />
            </Radiounder>
          </Radiowrap>
          <Reporttext>
            <Textarea name="comment" placeholder="詳細な情報を教えてください" onChange={this.formUpdate}>{this.state.comment}</Textarea>
          </Reporttext>
          <Reportfile>
            <Fileup>
              アップロードする
              <File type='file'></File>
            </Fileup>
          </Reportfile>
          <Reportfileimg>
            <Img>画像</Img>
            <Filename>ファイル名.....</Filename>
          </Reportfileimg>
          <Reportsubmit>
            <Submit type='submit' value='登録' />
          </Reportsubmit>
        </ReportForm>
      </Root>
    );
  }
}

export default withRouter(Form);

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F58989;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 800px) {
    background-color: #FFFFFF;
    color: #254FAE;
  }
`

const Mark = styled.div`
  margin: 78px 0 20px;

  @media screen and (max-width: 800px) {
    margin: 31px 0 8px;
  }
`

const Message = styled.p`
  margin-bottom: 30px;
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 29px;
  }
`

const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 700px;
  margin: 0 auto;
  margin-bottom: 77px;
  padding-top: 36px;
  border: 1px solid #707070;
  border-radius: 40px;
  background-color: #FFFFFF;
  color: #254FAE;

  @media screen and (max-width: 800px) {
    height: auto;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 39px;
    border: none;
    border-radius: none;
  }
`

const Title = styled.p`
  margin-bottom: 17px;
  font-size: 2.4rem;
`

const Joukyo = styled.p`
  margin-bottom: 16px;
  font-size: 1.8rem;
`

const Radiowrap = styled.div`
  margin-bottom: 39px;
`

const Radiotop = styled.div`
  display: flex;
  margin-bottom: 19px;
`

const Radiounder = styled.div`
  display: flex;
`

const Radiotext = styled.p`
  width: 48px;
  margin-right: 20px;
  font-size: 1.6rem;
  text-align: center;
`

const Reporttext = styled.div`
  margin-bottom: 40px;
  font-size: 1.2rem;
`

const Textarea = styled.textarea`
  width: 308px;
  height: 100px;
  padding: 4px 6px;
  border: 1px solid #254FAE;
  border-radius: 10px;

  &::-webkit-input-placeholder{
    color: #A2A2A2;
    font-size: 1.2rem;
  }
`

const Reportfile = styled.div`
  margin-bottom: 15px;
`

const Fileup = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 30px;
  border: 1px solid #254FAE;
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
`

const File = styled.input`
  display: none;
`

const Reportfileimg = styled.div`
`

const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 118px;
  border: 1px solid #254FAE;
  font-size: 2rem;
`

const Filename = styled.p`
  margin-bottom: 41px;
  text-align: left;
`

const Reportsubmit = styled.div`
`

const Submit = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #254FAE;
  color: #FFFFFF;
  font-size: 2rem;
`