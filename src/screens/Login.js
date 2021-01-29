import React from "react";
import { FormLogin } from "../components/Login/FormLogin";
export const Login = ({ setToken }) => {
  return (
    <div>
      <FormLogin setToken={setToken} />
    </div>
  );
};
