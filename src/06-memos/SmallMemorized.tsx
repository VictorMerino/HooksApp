import React, { memo } from "react";

export const SmallMemorized = memo(({ value }: { value: number }) => {
  console.log("Me volví a dibujar: Small 'memorizau'");
  return <small>{value}</small>;
});
