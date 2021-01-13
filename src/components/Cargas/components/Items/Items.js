import React from "react";
import { BaseCard } from "./BaseCard";
export const Items = ({ items, setItems, id }) => {
  return (
    <div>
      <BaseCard items={items} setItems={setItems} id={id} />
    </div>
  );
};
