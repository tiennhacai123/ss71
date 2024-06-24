import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../store/reducer/menuReducer";

export default function B5() {
  const menuReducer = useSelector((state: any) => {
    return state.menuReducer;
  });

  const dispatch = useDispatch();

  const showItems = () => {
    dispatch(menu());
  };
  return (
    <div>
      <ul className="menu-reducer">
        <li className="menu-items">
          <span className="material-symbols-outlined">dashboard</span>
          <p>{menuReducer === false ? "" : "Bảng điều khiển"}</p>
        </li>
        <li className="menu-items">
          <span className="material-symbols-outlined">person</span>
          <p>{menuReducer === false ? "" : "Tài khoản"}</p>
        </li>
        <li className="menu-items">
          <span className="material-symbols-outlined">paid</span>
          <p>{menuReducer === false ? "" : "Tài sản"}</p>
        </li>
        <li className="menu-items">
          <span className="material-symbols-outlined">monitoring</span>
          <p>{menuReducer === false ? "" : "Thống kê"}</p>
        </li>
        <li className="menu-items">
          <span className="material-symbols-outlined">draft</span>
          <p>{menuReducer === false ? "" : "Tài liệu"}</p>
        </li>
        <li onClick={showItems} className="menu-items">
          {menuReducer === false ? (
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          ) : (
            <span className="material-symbols-outlined">arrow_back_ios</span>
          )}
          <p>{menuReducer === false ? "" : "Thu gọn"}</p>
        </li>
      </ul>
    </div>
  );
}
