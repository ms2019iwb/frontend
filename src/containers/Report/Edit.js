import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Form/Input';
import Text from '../../components/Form/Text';

class Form extends Component {
  state = {
    data: {
      place: '',
      date: ''
    }
  };

  handleChange = event => {
    const data = {...this.state.data};
    data[event.target.name] = event.target.value;

    this.setState({
      data: data
    });

    console.log(data);
  };
  
  render() {
    return(
      <Report>
        <Header>Header</Header>
        <Midlecenter>
          <Title><FontAwesomeIcon icon={faEdit} />レポート編集</Title>
          <Reportedit>
            <Subtitle>編集が必要な場所を変更してください</Subtitle>
            <Subtitle2>編集</Subtitle2>
            <Occurrencewrap>
              <Occurrencetop>
                <Occurrenceitem>発生場所</Occurrenceitem>
                <Text
                  type='text'
                  name='place'
                  id='place'
                  width='236px'
                  height='35px'
                  padding='8px 9px'
                  border='1px solid #254FAE'
                  borderradius='10px 10px 10px 10px'
                  boxshadow='0px 3px 2px rgba(0,0,0,0.16)'
                  color='#828A9D'
                  fontsize='1.4rem'
                  textalign='left'
                  value={this.state.data.place}
                  placeholder='県庁所在地が入ります'
                  onChange={this.handleChange}
                />
              </Occurrencetop>
              <Occurrenceunder>
                <Occurrenceitem>発生日時</Occurrenceitem>
                <Text
                  type='datetime-local'
                  name='date'
                  id='date'
                  width='236px'
                  height='35px'
                  padding='7px 9px'
                  border='1px solid #254FAE'
                  borderradius='10px 10px 10px 10px'
                  boxshadow='0px 3px 2px rgba(0,0,0,0.16)'
                  color='#828A9D'
                  fontsize='1.6rem'
                  textalign='center'
                  value={this.state.data.date}
                  placeholder=''
                  onChange={this.handleChange}
                />
              </Occurrenceunder>
            </Occurrencewrap>
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
            <Reportsubmit>
              <Submit type='submit' value='変更'></Submit>
            </Reportsubmit>
          </Reportedit>
        </Midlecenter>
      </Report>
    );
  }
}

export default Form;

const Report = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #F58989;
  text-align: center;
  color: #FFFFFF;
  @media screen and (max-width: 900px) {
    background-color: #FFFFFF;
    color: #254FAE;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #707070;
  background-color: #FFFFFF;
  color: #060606;
  font-size: 3rem;
  @media screen and (max-width: 900px) {
    position: unset;
    top: unset;
    z-index: unset;
    height: 60px;
    margin-bottom: 41px;
  }
`

const Midlecenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 900px) {
    display: unset;
    flex-direction: unset;
    align-items: unset;
    justify-content: unset;
    width: unset;
    height: unset;
  }
`

const Title = styled.p`
  margin-bottom: 30px;
  font-size: 2.6rem;
  font-weight: bold;

  & > svg{
    width: 26px;
    height: auto;
    margin-right: 5px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 43px;
    font-size: 2rem;

    & > svg{
      width: 22px;
      height: auto;
    }
  }
`

const Reportedit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  padding-top: 52px;
  border: 1px solid #707070;
  border-radius: 40px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.3);
  background-color: #FFFFFF;
  color: #254FAE;
  @media screen and (max-width: 900px) {
    width: auto;
    height: auto;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 74px;
    border: none;
    border-radius: none;
    box-shadow: none;
  }
`

const Subtitle = styled.p`
  margin-bottom: 51px;
  font-size: 2rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const Subtitle2 = styled.p`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    margin-bottom: 41px;
    font-size: 1.8rem;
  }
`

const Occurrencewrap = styled.div`
  margin-bottom: 21px;
`

const Occurrencetop = styled.div`
  display: flex;
  margin-bottom: 21px;
`

const Occurrenceunder = styled.div`
  display: flex;
`

const Occurrenceitem = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  margin-right: 20px;
  font-size: 1.6rem;
  text-align: center;
`

const Radiowrap = styled.div`
  margin-bottom: 43px;

  @media screen and (max-width: 900px) {
    margin-bottom: 76px;
  }
`

const Radiotop = styled.div`
  display: flex;
  margin-bottom: 19px;
`

const Radiounder = styled.div`
  display: flex;
`

const Radiotext = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  margin-right: 20px;
  font-size: 1.6rem;
  text-align: center;
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