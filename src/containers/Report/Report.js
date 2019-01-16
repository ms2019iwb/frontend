import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faMapMarkerAlt, faFire } from '@fortawesome/free-solid-svg-icons';
// 環境変数
import Variable from '../../variables/Variable';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 一回あたりの取得件数
      getNumber: 14,
      reports: [],
      currentPage: 0,
      number: 0
    };
  }

  async componentDidMount() {
    await this.setCurrentPage();

    await this.fetchCount();

    this.fetchReport();
  }

  // state変更検知
  async componentWillReceiveProps() {
    await this.fetchCount();

    this.fetchReport();

    console.log(this.getTotalPage());
  }

  // 現在のページパラメータを取得してstateに設定
  setCurrentPage() {
    return new Promise((resolve) => {
      let getPage = 0;
      this.getParam('page') === null ? getPage = 1 : getPage = this.getParam('page');
      this.setState({
        currentPage: getPage
      });
      resolve();
    });
  }

  // 火災レポート指定件数取得
  fetchReport() {
    const params = {
      start_id: this.state.number - (this.state.currentPage - 1) * this.state.getNumber - this.state.getNumber + 1,
      end_id: this.state.number - (this.state.currentPage - 1) * this.state.getNumber
    }

    console.log('【frego-api】HTTPリクエスト開始: GET /posts/');

    axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/posts`, { params })
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            reports: response.data
          });
        }
      })
      .catch(error => {
        console.log('【frego-api】HTTPリクエスト異常終了: ', error);
      });
  }

  // 火災レポート格納件数取得
  fetchCount() {
    return new Promise((resolve, reject) => {
      console.log('【frego-api】HTTPリクエスト開始: GET /posts/count');

      axios
      .get(`${Variable.FREGO_API_BASE_ENDPOINT}/postscount`)
      .then(response => {
        if(response.data) {
          console.log('【frego-api】HTTPリクエスト正常終了: ', response.data);
          this.setState({
            number: response.data
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

  // 特定のキーの値だけ取得
  getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  prevPage = event => {
    event.preventDefault();
    // 前ページ
    const prevPage = this.state.currentPage - 1;

    this.props.history.push(`/report?page=${prevPage}`);
    this.setState({
      currentPage: prevPage
    });
  }

  nextPage = event => {
    event.preventDefault();
    // 次ページ
    const nextPage = this.state.currentPage + 1;

    this.props.history.push(`/report?page=${nextPage}`);
    this.setState({
      currentPage: nextPage
    });
  }

  // 総ページ数計算
  getTotalPage() {
    if(this.state.number % this.state.getNumber === 0) {
      return(this.state.number / this.state.getNumber);
    } else {
      return(Math.floor(this.state.number / this.state.getNumber) + 1);
    }
  }

  render() {
    return(
      <Root>
        <Header />
        <Main>
          <ReportList>
            {this.state.reports.map(item => {
              let iconColor
              switch(item.fire_fighting_status) {
                // 未消火
                case '1':
                  iconColor = '#ec1d1d';
                  break;
                // 消火済み
                case '2':
                  iconColor = '#254fae';
                  break;
                // 不明
                case '3':
                  iconColor = '#777';
                  break;
              }
              return(
                <ReportItem key={item.id}>
                  <ReportLink to={`/report/${item.id}`}>
                    <ReportMain>
                      <ReportTitle>{item.title}</ReportTitle>
                      <ReportDetailList>
                        <tbody>
                          <ReportDetailItem>
                            <ReportDetailTitle><ReportDetailIcon icon={faPlus} />新規</ReportDetailTitle>
                            <ReportDetailContent>{item.created_at}</ReportDetailContent>
                          </ReportDetailItem>
                          <ReportDetailItem>
                            <ReportDetailTitle><ReportDetailIcon icon={faEdit} />更新</ReportDetailTitle>
                            <ReportDetailContent>{item.updated_at !== item.updated_at ? item.updated_at : '更新無し'}</ReportDetailContent>
                          </ReportDetailItem>
                          <ReportDetailItem>
                            <ReportDetailTitle><ReportDetailIcon icon={faMapMarkerAlt} />位置情報</ReportDetailTitle>
                            <ReportDetailContent>{item.address !== '' ? item.address : '位置情報無し'}</ReportDetailContent>
                          </ReportDetailItem>
                        </tbody>
                      </ReportDetailList>
                    </ReportMain>
                    <StatusIconArea><StatusIcon iconColor={iconColor} icon={faFire} /></StatusIconArea>
                  </ReportLink>
                </ReportItem>
              );
            })}
          </ReportList>
          <PageArea>
            {this.state.currentPage != '1' && <PageControl onClick={this.prevPage}>前へ</PageControl>}
            <PageList>
              {/* ページ番号の実装 */}
              {/* {() => {
                for(let i=1; i <= this.state.number / this.state.getNumber; i++) {
                  console.log(i);
                  return(<PageItem page={this.state.page}>{i}</PageItem>);
                }
              }} */}
            </PageList>
            {this.state.currentPage != this.getTotalPage && <PageControl onClick={this.nextPage}>次へ</PageControl>}
          </PageArea>
        </Main>
      </Root>
    );
  }
}

export default withRouter(Report);

const Root = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #391B4D;
  width: 100%;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 76px 0 0;
  width: 100%;
`

const ReportList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1324px;
`

const ReportItem = styled.li`
  margin-bottom: 65px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 617px;
`

const ReportLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
`

const ReportMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: dashed 1px #707070;
  padding: 10px 0;
  width: 475px;
`

const ReportTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #A552DD;
`

const ReportDetailList = styled.table`
  padding: 0 10px;
`

const ReportDetailItem = styled.tr`
  display: flex;
`

const ReportDetailTitle = styled.th`
  padding: 4px 15px 4px 0;
  min-width: 85px;
  text-align: right;
  font-size: 1.4rem;
  color: #C5A8A8;
`

const ReportDetailIcon = styled(FontAwesomeIcon)`
  margin-right: 2px;
  font-size: 1.4rem;
  color: #C5A8A8;
`

const ReportDetailContent = styled.td`
  padding: 4px 0;
  width: 365px;
  font-size: 1.4rem;
  color: #C5A8A8;
`

const StatusIconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
`

const StatusIcon = styled(FontAwesomeIcon)`
  font-size: 7.5rem;
  color: ${props => props.iconColor};
`

const PageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`

const PageControl = styled.p`
  font-size: 1.4rem;
  color: #fff;
`

const PageList = styled.ul`
  display: flex;
  margin: 0 15px;
`

const PageItem = styled.li`
  border: solid 1px #fff;
  border-radius: 2px;
  width: 26px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`