import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, resetState } from "../store/reducer/CountReducer";

export default function B1() {
  const count: any = useSelector((state: any) => {
    return state.count;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <p>giá trị count {count}</p>
      <button onClick={() => dispatch(increase())}>tăng</button>
      <button onClick={() => dispatch(decrease())}>giảm</button>
      <button onClick={() => dispatch(resetState())}>Reset</button>
    </div>
  );
}
