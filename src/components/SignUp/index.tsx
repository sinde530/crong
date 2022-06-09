import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onClickName = (event: any) => {
    setName(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  const onClickEmail = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const onClickPassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };
  const onClickPasswordCheck = (event: any) => {
    setPasswordCheck(event.currentTarget.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (password !== passwordCheck) {
      alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onClickName}
          />
        </div>
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
          <input
            type="password"
            name="password-check"
            placeholder="password-check"
            value={passwordCheck}
            onChange={onClickPasswordCheck}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}
