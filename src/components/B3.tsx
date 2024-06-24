import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLight } from "../store/reducer/changeLight";

export default function B3() {
  const changeLights = useSelector((state: any) => {
    return state.changeLight;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={changeLights ? "background-white" : "background-black"}
        style={{
          width: "200px",
          height: "200px",
          border: "solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(changeLight())}>
          {changeLights ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
