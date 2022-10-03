import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    const onMouseMove = ({ x, y }: { x: number; y: number }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      // Event listener will only be triggered while component is still mounted, because we remove it when component is unmounted
      console.log("Message unmounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h5 className="text-danger">User already exists</h5>
    </>
  );
};
