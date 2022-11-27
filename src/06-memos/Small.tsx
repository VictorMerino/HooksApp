import React from "react";

export const Small = ({ value }: { value: number }) => {
  console.log("Me volví a dibujar");
  return <small>{value}</small>;
};
