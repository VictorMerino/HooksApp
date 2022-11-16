import React, { useRef } from "react";

export const FocusScreen = () => {
  const myInput = useRef();
  const onClick = () => {
    console.log("Clicked");
    myInput.current?.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Say your name"
        className="form-control"
        ref={myInput}
      />
      <button className="btn btn-secondary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
