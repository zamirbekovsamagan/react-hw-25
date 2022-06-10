import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slice/uiSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToHome = () => {
    setTimeout(() => {
      dispatch(uiActions.showLoading());
      dispatch(uiActions.logout());
      navigate("/form");
    }, 2000);
    dispatch(uiActions.showLoading());
  };

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Welcome to login page</h2>
      <StyledButton variant="contained" onClick={backToHome}>
        Exit
      </StyledButton>
    </div>
  );
};

export default UserProfile;

const StyledButton = styled(Button)`
  background-color: gray;
  margin-bottom: 20px;
  &:hover {
    background-color: black;
  }
`;
