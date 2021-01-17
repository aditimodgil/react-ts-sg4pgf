import React from "react";
import { StyledFormWrapper, StyledForm } from "../helper";

const AuthForm = ({ submit, children }) => (
  <StyledFormWrapper>
    <StyledForm onSubmit={submit}>{children}</StyledForm>
  </StyledFormWrapper>
);

export default AuthForm;
