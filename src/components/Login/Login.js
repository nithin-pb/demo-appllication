import React, {useContext, useEffect, useState} from "react";
import service from "../../service/service";
import AuthContext from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {token, setToken} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const loginHandler = async (e) => {
        try {

            e.preventDefault();

            setError(null)
            if (!username && !password) {
                setError('2 fields required');
                return
            }
            setLoading(true)
            const params = {
                username: username,
                password: password
            }
            const results = await service.Auth().login(params);
            setToken(results.data.data.token);
        } catch (err) {
            console.log(err)
            const error = JSON.parse(err.request.response) || null;
            setError(error.error ? error.error : 'something went wrong');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token) {
            history.push('/stock');
        }
    }, [token])

    return (
        <div className={"login"}>
            <div className={"login-wrapper"}>
                <form onSubmit={loginHandler}>
                    <p className={"title"}>Login</p>
                    <label>
                        Username:
                        <input type="text"
                               name="name"
                               value={username}
                               onChange={(e) => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        Password:
                        <input type="password"
                               name="name"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" disabled={loading} value={loading ? "Please wait..." : "Login"}/>
                    <p className={"error"}>{error}</p>
                </form>
            </div>
        </div>
    )
}

