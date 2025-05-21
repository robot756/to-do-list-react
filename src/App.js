import React, { useEffect, useState } from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import PublicRoutes from "./components/UI/PublicRoutes";
import { AuthContext } from "./components/UI/contex";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    
    setLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <MyNavbar />
        <PublicRoutes />
      </BrowserRouter>
    </AuthContext.Provider>  
  )
}

export default App;
