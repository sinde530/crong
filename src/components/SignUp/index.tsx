/* eslint-disable no-console */
import { useCallback, useState } from "react";

import useInput from "../../hooks/useInput";

export default function SignUp() {
  const [name, onClickName] = useInput("");
  const [email, onClickEmail] = useInput("");
  // , , 공백으로 set에러를 훅에 담을수 없으니 공백으로 처리할수있다.
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");

  const [mismatchError, setMismatchError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  console.log(setSignUpSuccess);
  console.log(setSignUpError);

  const onClickPassword = useCallback(
    (event: any) => {
      setPassword(event.target.value);
      setMismatchError(event.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onClickPasswordCheck = useCallback(
    (event: any) => {
      setPasswordCheck(event.target.value);
      setMismatchError(event.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      //   console.log(name, email, password, passwordCheck);
      if (!mismatchError) {
        // console.log("Error");
      }
    },
    [name, email, password, passwordCheck]
  );

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
        {mismatchError && <p>비밀번호가 일치하지 않습니다.</p>}
        {!name && <p>이름을 입력해주세요.</p>}
        {signUpError && <p>{signUpError}</p>}
        {signUpSuccess && <p>회원가입되었습니다! 로그인해주세요.</p>}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}
