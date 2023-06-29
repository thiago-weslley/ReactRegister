import React from "react";
import { Button as ButtonUser } from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonUser {...props}>{children}</ButtonUser>;
};

export default Button;
