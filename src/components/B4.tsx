import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gridMode, listMode } from "../store/reducer/modeReducer";

export default function B4() {
  const mode: any = useSelector((state: any) => {
    return state.modeReducer;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(listMode())}>list mode</button>
      {mode === "listMode" && (
        <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <li className="list-mode">1</li>
          <li className="list-mode">2</li>
          <li className="list-mode">3</li>
          <li className="list-mode">4</li>
        </ul>
      )}

      <br />
      <button onClick={() => dispatch(gridMode())}>Grid mode</button>
      {mode === "gridMode" && (
        <ul style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <li className="grid-mode">1</li>
          <li className="grid-mode">2</li>
          <li className="grid-mode">3</li>
          <li className="grid-mode">4</li>
        </ul>
      )}
    </div>
  );
}
