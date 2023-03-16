import React, { useState } from "react";
import axios from "axios";
import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.png";
import Showpassword from "../../assets/images/Eye.png";
import { useAuthContext } from "../../context/ContextAuthor";
import {AlredyAccount,ErrorMessage,InputWrapper,Register,ShowPassword,StyledButton,StyledForm,StyledImg,StyledLink,StyledOR, SubmitButton,} from "./style";
import { schema } from "./Validate";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Login() {
  const { loading, setLoading, errors, setErrors, setToken, setAuthorized } =
  useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");


  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };


  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setEmail(value);
    if (id === "password") setPassword(value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    schema
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(`${process.env.REACT_APP_SHOMAN_URL}/users/login`, {
          email: email,
          password: password,
        });

        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);

          setToken(res.data.token);
          setErrors([]);
          setLoading(false);
          setAuthorized(true);
        }
      })

      .catch((e) => {
        const errors = e.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(errors);
        setLoading(false);
      });
  };


  return (
    <>
      <Header form />
      <StyledForm onSubmit={handleSubmit}>
        <Register>Log in to Freelance Platform</Register>
        <InputWrapper>
          <label htmlFor="username">Username or Email</label>
          <input
            type="email"
            id="username"
            onChange={handleChangeInput}
            value={email}
            placeholder="Email or phone"
          />
        </InputWrapper>
        {errors && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type={passwordType}
            id="password"
            onChange={handleChangeInput}
            value={password}
            placeholder="Type Here"
          />
          {errors && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
          <ShowPassword
            src={Showpassword}
            alt="Showpassword"
            className="passwordshow"
            onClick={handlePasswordShow}
          />
        </InputWrapper>
        <SubmitButton type="submit">
          {loading ? "loading..." : "  Log In"}
        </SubmitButton>
        <StyledOR>
          <div></div> <span>or</span> <div></div>
        </StyledOR>

        <StyledButton facebook={Apple}>
          <StyledImg src={Google} alt="Google" />
          Continue with Google
        </StyledButton>
        <StyledButton>
          <StyledImg src={Apple} alt="facebook" facebook={Apple} />
          Continue with apple
        </StyledButton>
        <AlredyAccount>Don’t have an Freelance account?</AlredyAccount>
        <StyledLink to="/signup"> Sign Up now</StyledLink>
      </StyledForm>
      <Footer form />
    </>
  );
}

export default Login;