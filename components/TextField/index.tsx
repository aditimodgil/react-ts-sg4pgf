import React from "react";
import { ITextFieldProps } from "../../types";
import { StyledInput } from "../helper";

const TextField = React.forwardRef(
  ({ type, placeholder, name }: ITextFieldProps, ref) => (
    <StyledInput type={type} placeholder={placeholder} name={name} ref={ref} />
  )
);

export default TextField;
