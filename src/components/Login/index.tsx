import { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onClickPassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={onClickEmail}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={onClickPassword}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <Link to="/SignUp">Sign Up</Link>
    </>
  );
}
