


function AdminLogin() {


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
            <button className="login-button" type="submit" >Login</button>
        </form>
        
    </div>;
}

export default AdminLogin;