import {createContext} from "react";


const AuthContext = createContext({
    token:"no org",
    setToken:()=>{}
});
export default AuthContext;