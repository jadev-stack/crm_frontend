import React from "react";
import { FormLogin } from "../components/Login/FormLogin";
export const Login = ({ token }) => {
  return (
    <div>
      <FormLogin token={token} />
    </div>
  );
};
