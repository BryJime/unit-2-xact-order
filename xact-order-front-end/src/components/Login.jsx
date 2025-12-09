import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [ validLogin, setValidLogin] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.value === "admin" && password.value === "password") {
            
            navigate('/Admin');
        } else {
            setValidLogin(false);
        }
    }

    return <div>
        <h1 className="login-title">LOGIN</h1>
        <hr className="page-line"/> 
        <form className="login-form">
            <label className="username-label" htmlFor="username">Username:</label>
            <input className="login-input" type="text" id="username" name="username" required />
            <br />
            <label className="password-label" htmlFor="password">Password:</label>
            <input className="login-input" type="password" id="password" name="password" required />
            <br />
            <button className="login-button" type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <div>
            {validLogin ? <p></p> : <p className="login-error">Please enter valid credentials.</p> }
        </div> 
        
    </div>;
}

export default Login;