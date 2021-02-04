import React from "react";
import { BaseCard } from "../Items/BaseCard";
export const Items = ({ items, setItems, rcarga, setRcarga, setState }) => {
  return (
    <div>
      <BaseCard
        items={items}
        setItems={setItems}
        rcarga={rcarga}
        setRcarga={setRcarga}
        setState={setState}
      />
    </div>
  );
};
