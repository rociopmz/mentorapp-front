import './App.css';
import Routes from './Routes';
import Navbar from './app/components/Navbar'
import {useContext} from "react"
import {logoutEndpoint} from './app/services/auth-ws'
import {withRouter} from 'react-router-dom'
import {Ctx} from './app/hooks/auth-hooks'


function App({history}) {
  const {user, logout} = useContext(Ctx)

  const onLogout = async()=> {
    try{
      await logoutEndpoint()
      localStorage.removeItem("user")
      logout ()
      history.push('/login')
    }catch(error){ console.log("el error", error)
    }
  }
    
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



