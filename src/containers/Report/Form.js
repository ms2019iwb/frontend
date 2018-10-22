import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Form/Input';

class Form extends Component {
  render() {
    return(
      <Report>
        <Header>Header</Header>
        <Mark>マーク</Mark>
        <Houkoku>火災は位置情報と共に報告されました！</Houkoku>
        <Reportform>
          <Check>チェック</Check>
          <Joukyo>詳しい状況をレポートしてください</Joukyo>
          <Radiowrap>
            <Radiotop>
              <Radiotext>通報</Radiotext>
              <Input text='未通報' borderradius='10px 0px 0px 10px' name='tr' value='0' id='mitu' />
              <Input text='通報済み' borderradius='0px 0px 0px 0px' name='tr' value='1' id='tuhozumi' />
              <Input text='不明' borderradius='0px 10px 10px 0px' name='tr' value='2' id='humei' />
            </Radiotop>
            <Radiounder>
              <Radiotext>救急車</Radiotext>
              <Input text='未到着' borderradius='10px 0px 0px 10px' name='tk' value='0' id='mito' />
              <Input text='到着済み' borderradius='0px 0px 0px 0px' name='tk' value='1' id='tozumi' />
              <Input text='不要' borderradius='0px 10px 10px 0px' name='tk' value='2' id='huyo' />
            </Radiounder>
          </Radiowrap>
          <Reporttext>
            <Textarea placeholder="詳細な情報を教えてください"></Textarea>
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
            <Submit type='submit'></Submit>
          </Reportsubmit>
        </Reportform>
      </Report>
    );
  }
}

export default Form;

const Report = styled.div`
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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-bottom: 78px;
  border-bottom: 1px solid #707070;
  background-color: #FFFFFF;
  color: #060606;
  font-size: 3rem;
  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 31px;
  }
`

const Mark = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    margin-bottom: 8px;
  }
`

const Houkoku = styled.p`
  margin-bottom: 30px;
  font-size: 2rem;
  @media screen and (max-width: 800px) {
    margin-bottom: 29px;
  }
`

const Reportform = styled.form`
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

const Check = styled.p`
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