import React from "react";
import { Barra } from "../components/Barra/Barra";
import { UserList } from "../components/Users/UserList";

export const Users = () => {
  return (
    <div>
      <Barra />
      <UserList />
    </div>
  );
};
