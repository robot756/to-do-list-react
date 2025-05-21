import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MyLogin from './pages/MyLogin'
import MyAbout from './pages/MyAbout'
import MyPosts from './pages/MyPosts'
import PostIdPages from '../PostIdPages'
import { AuthContext } from './contex'
import MyLoader from './Loader/MyLoader'

const PublicRoutes = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <MyLoader/>
  }
  
  return (
    isAuth
    ?
      <Routes>
        <Route path="*" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<MyPosts />} />
        <Route path="/about" element={<MyAbout />} />
        <Route path="/posts/:id" element={<PostIdPages />} />
      </Routes>
    :
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<MyLogin />} />
      </Routes>
  )
}

export default PublicRoutes