import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("Message mounted");

    const onMouseMove = ({ x, y }: { x: number; y: number }) => {
      const coords = { x, y };
      setCoords(coords);
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
      <hr />
      Coords: {JSON.stringify(coords)}
    </>
  );
};
