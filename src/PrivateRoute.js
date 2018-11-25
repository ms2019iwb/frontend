import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from './services/AuthService'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.authApi = new AuthService()
    this.state = {
      // ログインチェックが終わるまで、ローディングを表示
      loading : true,
      // ログインチェック結果
      isAuthenticated : false
    }
  }

  async componentDidMount() {
    // ログイン状態のチェック
    const loginStatus = await this.authApi.checkLogin()

    // 結果を反映
    this.setState({
      loading : false, 
      isAuthenticated : loginStatus
    })
  }

  render() {
    // ルーティング情報を取得
    const { component : Component, ...rest } = this.props

    // ログインチェック状態を取得
    const { loading, isAuthenticated } = this.state

    // ログインチェック前なら、ローディングを表示
    if (loading) {
      return <div>Loading...</div>
    }

    // ログインチェック後はルーティング処理を行う
    return (
      <Route {...rest} render={() => {
        // 未ログインなら、ログイン画面にリダイレクト
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
        // ログイン済なら、指定されたコンポーネントを表示
        return <Component {...this.props} />
      }}
      />
    )
  }
}

export default PrivateRoute