import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    return () => {
      console.log("Message unmounted");
    };
  }, []);

  return (
    <>
      <h5 className="text-danger">User already exists</h5>
    </>
  );
};
