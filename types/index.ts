export interface ITextFieldProps {
  type: string;
  placeholder: string;
  name: string;
}

export interface IButtonProps {
  isdisabled: boolean;
  children: any;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}
