import { useState } from "react";
import "./App.css";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

function App() {
  const [login, isLogin] = useState(true);

  return (
    <div className="container">
      <h2>Welcome to Netbook</h2>
      <div className="form-top">
        <h4 className={login ? "active" : ""} onClick={() => isLogin(true)}>
          Login
        </h4>
        <h4 className={!login ? "active" : ""} onClick={() => isLogin(false)}>
          Signup
        </h4>
      </div>
      <div className="form-bottom">{login ? <Login /> : <Signup />}</div>
    </div>
  );
}

export default App;
