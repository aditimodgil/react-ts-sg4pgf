import React from "react";
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import * as actions from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { ILoginForm } from "../../types";
import { useForm } from "react-hook-form";
//import * as yup from "yup";
//import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../../components/TextField";
import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import { StyledError } from "../../components/helper";

const StyledLink = styled(Link)`
  color: #f7797d;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
 const history = useHistory();
 const userLogin = useSelector(state => state.login);
 const dispatch = useDispatch();



  const { register, handleSubmit, errors } = useForm<ILoginForm>();

  const onSubmit = (data: ILoginForm) => {
    dispatch(actions.login(data.email,data.password));
    userLogin.userId? history.push("/") : null;
  };

  return (
    <AuthForm submit={handleSubmit(onSubmit)}>
    {userLogin?.error && <StyledError>{userLogin?.error}</StyledError>}
      <h2>Login Form</h2>
      <label htmlFor="name">Name</label>
      <TextField type="text" placeholder="email" name="email" ref={register} />
      {errors?.email && <StyledError>{errors?.email.message}</StyledError>}
      <label htmlFor="name">Password</label>
      <TextField
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
      {errors?.password && <StyledError>{errors?.password.message}</StyledError>}
      <Button isdisabled={userLogin.loading}>Login</Button>
      <StyledLink to="/register">new user? sign up</StyledLink>
    </AuthForm>
  );
};

export default Login;
