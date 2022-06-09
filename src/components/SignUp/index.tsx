import { useCallback, useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [mismatchError, setMismatchError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  console.log(setSignUpSuccess);
  console.log(setSignUpError);

  const onClickName = useCallback((event: any) => {
    setName(event.target.value);
  }, []);

  const onClickEmail = useCallback((event: any) => {
    setEmail(event.target.valie);
  }, []);

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
      console.log(name, email, password, passwordCheck);
      if (!mismatchError) {
        console.log("Error");
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
