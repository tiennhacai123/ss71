import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomNumber } from "../store/reducer/randomReducer";

export default function B2() {
  const random: any = useSelector((state: any) => {
    return state.randomNumber;
  });

  console.log(random);

  const dispatch = useDispatch();
  return (
    <div>
      <p>List number [{random.map((item: number) => item + ",")}]</p>
      <button onClick={() => dispatch(randomNumber())}>Random Number</button>
    </div>
  );
}
