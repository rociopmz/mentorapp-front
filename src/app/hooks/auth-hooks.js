import { createContext, useState, useEffect } from "react";


export const Ctx = createContext()

export const AppCtxProv = (props) => {
 const [user, setUser] = useState ({role: "mentee"})
 const login = (user) => setUser (user);
 const logout = () => setUser ({role: "mentee"});
 const checkSession =  async () => { 
     try{
        const userLocal = JSON.parse (localStorage.getItem("user"))
        if (userLocal) {
            login (userLocal) 
        }
     }catch(error){
         console.log("error en el contexto", error)
         setUser ({role: "mentee"})
     }
 }
useEffect (()=>{
checkSession()
}, [])
 const value = {
     user, 
     login,
     logout
 }
return <Ctx.Provider {...props} value={value} />
}