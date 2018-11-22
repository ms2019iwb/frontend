import React from 'react'
import { Redirect } from 'react-router-dom'

// ログインステータスによる切り替え
const Auth = (props) => (props.loginStatus ? props.children : <Redirect to={'/login'}/>)

export default Auth