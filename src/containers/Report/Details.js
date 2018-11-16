import React, { Component } from 'react';
import styled from 'styled-components';
import Status from '../../components/Form/Status';
import Button from '../../components/Form/Button';
import Icon from '../../components/Form/Icon';
import Commentframe from '../../components/Form/Commentframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faPen, faUser } from '@fortawesome/free-solid-svg-icons';

class Details extends Component {
  render() {
    return(
      <Report>
        <Header>Header</Header>
        <Detailstop>
          <Nametimewrap>
            <Nametime>
              <Name>名前が入ります。</Name>
              <Time>発生日時：2018年10月26日 12:00</Time>
            </Nametime>
            <Updatetime><FontAwesomeIcon icon={faPen} />2018年10月26日 13:00</Updatetime>
          </Nametimewrap>
          <Placestatus>
            <Place><FontAwesomeIcon icon={faFire} />発生場所：○○○県○○○市○○○</Place>
            <Statuswrap>
              <Statustop>
                <Statusname>通報</Statusname>
                <Status backgroundcolor='#BFAFAF' borderradius='10px 0px 0px 10px' color='#FFFFFF' text='未通報' />
                <Status backgroundcolor='#FFFFFF' borderradius='0px 0px 0px 0px' color='#BFAFAF' text='通報済み' />
                <Status backgroundcolor='#FFFFFF' borderradius='0px 10px 10px 0px' color='#BFAFAF' text='不明' />
              </Statustop>
              <Statusmiddle>
                <Statusname>救急車</Statusname>
                <Status backgroundcolor='#FFFFFF' borderradius='10px 0px 0px 10px' color='#BFAFAF' text='未到着' />
                <Status backgroundcolor='#BFAFAF' borderradius='0px 0px 0px 0px' color='#FFFFFF' text='到着済み' />
                <Status backgroundcolor='#FFFFFF' borderradius='0px 10px 10px 0px' color='#BFAFAF' text='不要' />
              </Statusmiddle>
              <Statusbottom>
                <Statusname>消火</Statusname>
                <Status backgroundcolor='#FFFFFF' borderradius='10px 0px 0px 10px' color='#BFAFAF' text='未消化' />
                <Status backgroundcolor='#BFAFAF' borderradius='0px 0px 0px 0px' color='#FFFFFF' text='消火済み' />
                <Status backgroundcolor='#FFFFFF' borderradius='0px 10px 10px 0px' color='#BFAFAF' text='不明' />
              </Statusbottom>
            </Statuswrap>
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
          </Placestatus>
        </Detailstop>
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
      </Report>
    );
  }
}

export default Details;

const Report = styled.div`
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #707070;
  background-color: #FFFFFF;
  color: #060606;
  font-size: 3rem;
`

const Detailstop = styled.div`
  width: 100%;
  border-bottom: 2px solid #254FAE;
  background-color: #F58989;
  text-align: center;
  color: #FFFFFF;
`

const Nametimewrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-top: 22px;
  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: right;
  }
`

const Nametime = styled.div`
  margin-left: 200px;
  text-align: left;
  
  @media screen and (max-width: 1000px) {
    order: 2;
    margin-left: 15px;
  }
`

const Name = styled.div`
  font-size: 2.4rem;
  
  @media screen and (max-width: 1000px) {
    font-size: 1.6rem;
  }
`

const Time = styled.div`
  font-size: 2rem;
  
  @media screen and (max-width: 1000px) {
    font-size: 1.4rem;
  }
`

const Updatetime = styled.div`
  margin-right: 200px;
  font-size: 2.4rem;

  & > SVG {
    width: 17px !important;
    height: auto !important;
    vertical-align: baseline;
    margin-right: 10px;
  }
  
  @media screen and (max-width: 1000px) {
    order: 1;
    margin-right: 15px;
    margin-bottom: 9px;
    font-size: 1.2rem;

    & > svg {
      width: 12px !important;
      height: auto !important;
      margin-right: 1px;
    }
  }
`

const Placestatus = styled.div`
`

const Place = styled.div`
  margin-bottom: 23px;
  font-size: 3rem;

  & > SVG{
    width: 20px !important;
    height: auto !important;
    vertical-align: baseline;
    margin-right: 5px;
  }
  
  @media screen and (max-width: 1000px) {
    font-size: 2rem;

    & > svg {
      width: 15px !important;
      height: auto !important;
      margin-right: 4px;
    }
  }
`

const Statuswrap = styled.div`
  margin-bottom: 36px;
`

const Statustop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`

const Statusmiddle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`

const Statusbottom = styled.div`
  display: flex;
  justify-content: center;
`

const Statusname = styled.p`
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