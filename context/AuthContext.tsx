import {createContext,ReactInstance,useContext, useEffect,useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './../config/firabse';
const AuthContext = createContext({})
export const useAuth =()=> useContext(AuthContext)
export const  AuthContextProvider =({children}:{children:React.ReactNode })=>{

    const [user,setUser] = useState<any>(null)
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        

    })
},[])
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}