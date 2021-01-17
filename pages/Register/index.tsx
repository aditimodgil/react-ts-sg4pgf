import React from "react";
import {useSelector,useDispatch} from "react-redux";
import * as actions from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { IRegisterForm } from "../../types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../../components/TextField";
import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import styled from "styled-components";
import { StyledError, StyledMessage } from "../../components/helper";

const StyledLink = styled(Link)`
  color: #f7797d;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;

const Register = () => {
const history = useHistory();
const userRegister = useSelector(state => state.register);
const dispatch = useDispatch();
  

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const { register, handleSubmit, errors } = useForm<IRegisterForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IRegisterForm) => {
    dispatch(actions.register(data.email,data.password));
  };

  return (
    <AuthForm submit={handleSubmit(onSubmit)}>
      <h2>Register Form</h2>
      {userRegister.userId ? <StyledMessage> you registered successfully</StyledMessage> : 
      userRegister.error ? <StyledError>{userRegister.error}</StyledError> : "" }
      <label htmlFor="name">Email</label>
      <TextField
        type="text"
        placeholder="email"
        name="email"
        ref={register}
      />
      {errors.email && <StyledError>{errors?.email.message}</StyledError>}

      <label htmlFor="name">Password</label>
      <TextField
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
       {errors.password && <StyledError>{errors?.password.message}</StyledError>}

      <label htmlFor="name">Confirm Password</label>
      <TextField
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        ref={register}
      />
      {errors.confirmPassword && <StyledError>{errors?.confirmPassword.message}</StyledError>}

      <Button isdisabled={userRegister.loading}>Register</Button>
      <StyledLink to="/login"> have an account? sign in</StyledLink>
    </AuthForm>
  );
};

export default Register;
