import AuthContext from "../context/AuthContext";
import {useContext} from "react";

export default function useToken() {
    const {token} = useContext(AuthContext)
    return token
}
