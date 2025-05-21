import React, { useContext } from 'react'
import MyInput from '../input/MyInput'
import MyButton from '../button/MyButton'
import { AuthContext } from '../contex'

const MyLogin = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div style={{margin: '0 auto', width: '800px'}}>
      <h1 style={{textAlign:'center'}}>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Введите логин' />
        <MyInput type="password" placeholder='Введите пароль' />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default MyLogin