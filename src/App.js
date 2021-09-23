import './App.css';
import Routes from './Routes';
import Navbar from './app/components/Navbar'
import {useEffect, useState} from "react"
import {logoutEndpoint} from './app/services/auth-ws'
import {withRouter} from 'react-router-dom'

function App({history}) {

  const [user, setUser]= useState({})
  const onLogout = async()=> {
    try{
      await logoutEndpoint()
      localStorage.removeItem("user")
      setUser({})
      history.push('/login')
    }catch(error){ console.log(error)
    }
  }
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem ("user"))
    if(userLocal){
      setUser (userLocal)
    }
  },[])

 console.log("Hola, user")
  return (
    <div className="App">
      <Navbar 
      newUser={user} 
      onLogout={onLogout} />
  
      <Routes/>
    </div>
  );
}

const AppWithRouter = withRouter(App)
export default AppWithRouter;



