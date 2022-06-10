import React, { useState } from "react";
import classes from "./Form.module.css";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slice/uiSlice";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  

const Form = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  const [gmail, setGmail] = useState({
    gmail: "",
    gmailIsValid: true,
  });

  const [password, setPassword] = useState({
    password: "",
    passwordIsValid: true,
  });

  const gmailHandler = (event) => {
    setGmail({
      gmail: event.target.value,
      gmailIsValid: validEmailRegex.test(event.target.value),
    });
  };

  const passwordHandler = (event) => {
    setPassword({
      password: event.target.value,
      passwordIsValid: event.target.value.trim().length > 5,
    });
  };

  const formIsValid = validEmailRegex.test(gmail.gmail) && password.password.trim().length > 5
  const userData = {gmail: gmail.gmail, password:password.password}

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('userData',JSON.stringify(userData))
    setTimeout(()=>{
      dispatch(uiActions.showLoading())
      dispatch(uiActions.login())
      navigate("/user-profile");
    },2000)
    dispatch(uiActions.showLoading())
  };

  return (
    <form className={classes.form}>
      <h1>Sign In</h1>

      <StyledTextField
        error={!gmail.gmailIsValid}
        id="outlined-basic"
        label="Gmail"
        variant="outlined"
        helperText={gmail.gmailIsValid ? "" : "write correct email"}
        onChange={gmailHandler}
      />

      <StyledTextField
        error={!password.passwordIsValid}
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        helperText={password.passwordIsValid ? "": "must be at least 6 character"}
        onChange={passwordHandler}
      />

      <StyledButton variant="contained" disabled={!formIsValid} onClick={submitHandler}>Sing in</StyledButton>
    </form>
  );
};

export default Form;

const StyledButton = styled(Button)`
  background-color: gray;
  width: 300px;
  height: 40px;
  &:hover {
    background-color: black;
  }
`;
const StyledTextField = styled(TextField)`
  width: 300px;
  margin-bottom: 30px;
`;
