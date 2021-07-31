import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import MainRoute from "./routes/route";
import AuthContext from "./context/AuthContext";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(null);
    const value = {token, setToken};
    return (
        <Router history>
            <AuthContext.Provider value={value}>
                <MainRoute/>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
