function Signup() {
  return (
    <div className="signup-container">
      <h3>Signup</h3>
      <form className="signup-form">
        <input
          type="text"
          placeholder="Username"
          required
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
