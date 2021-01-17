import React from "react";
import { StyledButton } from "../helper";
import { IButtonProps } from "../../types";

const SubmitButton = ({ isdisabled, children }: IButtonProps) => (
  <StyledButton disabled={isdisabled}> {children}</StyledButton>
);
export default SubmitButton;
