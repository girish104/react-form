function Login() {
  return (
    <div className="login-container">
      <h3>Login</h3>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username or Email"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
